import axios from 'axios';

/**
 * Formats timestamp into readable time components.
 * @param {number} timestamp Time in milliseconds.
 * @returns {object} Returns formatted time object.
 * @example
 * const timestamp = 946706400000;
 * getFormattedTime(timestamp) => { hours: 12, minutes: '00', meridian: 'AM' }
 */
export const getFormattedTime = (timestamp = Date.now()) => {
	const date = new Date(timestamp);

	const formattedHours = (date.getHours() + 24) % 12 || 12;
	const formattedMinutes = String(date.getMinutes()).padStart(2, '0');
	const formattedMeridian = date.getHours() < 12 ? 'AM' : 'PM';

	return {
		hours: formattedHours,
		minutes: formattedMinutes,
		meridian: formattedMeridian,
	};
};

/**
 * Formats a timestamp into a readable date components.
 * @param {number} timestamp Time in milliseconds.
 * @returns {object} Returns formatted date object.
 * @example
 * const timestamp = 946706400000;
 * getFormattedDate(timestamp) => { day: 1, week: 'Sat', month: 'Jan', year: 2000 }
 */
export const getFormattedDate = (timestamp = Date.now()) => {
	const monthRef = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]; // prettier-ignore
	const weekdayRef = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const date = new Date(timestamp);

	return {
		day: date.getDate(),
		week: weekdayRef[date.getDay()],
		month: monthRef[date.getMonth()],
		year: date.getFullYear(),
	};
};

/**
 * Formats timestamp into readable time components according to UTC (Local Time At Location).
 * @param {number} timestamp Time adjusted with timezone offset (milliseconds).
 * @returns {object} Returns formatted time object.
 */
export const getFormattedUTCTime = timestamp => {
	const date = new Date(timestamp);

	return {
		hours: (date.getUTCHours() + 24) % 12 || 12,
		minutes: String(date.getUTCMinutes()).padStart(2, '0'),
		meridian: date.getUTCHours() < 12 ? 'AM' : 'PM',
	};
};

/**
 * Returns a location's time of day according to UTC. Each timestamp's date instance is converted to a value in terms of hours (eg. 3:30pm => 15.5) and compared to determine the time of day. The resulting value is used to retrieve a day or night variant Weather Icon when referenced to OpenWeather's API weather codes.
 * @param {number} current Comparison time value (timestamp: seconds).
 * @param {number} sunrise Start of the day (timestamp: seconds).
 * @param {number} sunset End of the day (timestamp: seconds).
 * @param {number} timezoneOffset Shift in UTC (timestamp: seconds).
 * @returns Returns 'day' || 'night'
 * @example
 * const [current, sunrise, sunset, timezoneOffset] = [1646873089, 1646835087, 1646877343, -28800];
 * getLocationTimeOfDay(current, sunrise, sunset, timezoneOffset)
 * => {now: 16.73, start: 6.18, end: 17.92}
 * => 'day'
 */
export const getLocationTimeOfDay = (current, sunrise, sunset, timezoneOffset) => {
	const times = {};

	[current, sunrise, sunset].forEach((timestamp, i) => {
		const keysRef = ['now', 'start', 'end'];
		const date = new Date((timestamp + timezoneOffset) * 1000);
		times[keysRef[i]] = date.getUTCHours() + +(date.getUTCMinutes() / 60).toFixed(2);
	});

	return times.now > times.start && times.now < times.end ? 'day' : 'night';
};

/**
 * Formats firebase error code into a more readable format for users.
 * @param {string} Firebase Firebase error code.
 * @returns {string} Returns formatted error code.
 * @example
 * const errorCode = 'auth/invalid-email';
 * formatErrorCode(errorCode) => 'Invalid Email'
 */
export const formatErrorCode = errorCode => {
	const words = errorCode.split('/')[1].split('-');
	const formatMessage = words.map(word => {
		return `${word[0].toUpperCase()}${word.substring(1)}`;
	});
	return formatMessage.join(' ');
};

/**
 * Reverse geocodes user coordinates (using [Geoapify](https://apidocs.geoapify.com/docs/geocoding/reverse-geocoding/#about)) retrieved from HTML5 Geolocation API.
 * @param {object} setState To set component state.
 * @param {object} setLoading To set component loading state.
 * @returns {Promise<object>} Returns location data object.
 * @example
 * const userLocation = await getUserLocation();
 * userLocation => { zip: 70401, state: 'LA', city: 'Hammond' }
 */
export const fetchUserLocation = (setState, setLoading) => {
	setLoading(true);

	if (!navigator.geolocation) {
		console.log('Geolocation is unsupported.');
		setLoading(false);
	}

	// USERS GEOLOCATION (HTML5 GEOLOCATION API)
	navigator.geolocation.getCurrentPosition(
		location => {
			const base = 'https://api.geoapify.com/v1/geocode/reverse';
			const query = `?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`;
			const key = `&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`;
			fetchUserAddress(`${base}${query}${key}`);
		},
		error => {
			console.log('Unable to retrieve coordinates.', error);
			setLoading(false);
		},
	);

	// FETCHED ADDRESS (GEOAPIFY)
	const fetchUserAddress = async fetchURL => {
		try {
			const response = await fetch(fetchURL);
			const data = await response.json();

			setState({
				city: data.results[0].city,
				state: data.results[0].state,
				country: data.results[0].country,
				flag: getCountryFlagEmoji(data.results[0].country_code),
				lat: data.results[0].lat,
				lon: data.results[0].lon,
			});
		} catch (error) {
			console.log('Unable fetch location address.', error);
		} finally {
			setLoading(false);
		}
	};
};

/**
 * Retrieves an array of location matches to a queried input.
 * @param {string} query The user's search input.
 * @param {object} setState To set component state.
 * @returns {array} Returns an array of location objects.
 * @example
 * fetchSearchLocation('new york')
 * => [{city, state, country, coords}, {...}, {...}, {...}, {...}]
 */
export const fetchSearchLocation = async (query, setState) => {
	const api = {
		directGeocoding: `https://api.openweathermap.org/geo/1.0/direct?`,
		query: `q=${query}`,
		param: `&limit=5`,
		key: `&appid=${process.env.REACT_APP_WIDGET_WEATHER_API_KEY}`,
	};

	try {
		const fetchURL = `${api.directGeocoding}${api.query}${api.param}${api.key}`;
		const data = await axios.get(fetchURL);
		setState(data.data);
	} catch (err) {
		console.log(err);
	}
};

/**
 * [Country Code To Flag Emoji](https://dev.to/jorik/country-code-to-flag-emoji-a21)
 *
 * Takes a country code and determines each letter's [Regional Indicator Symbol](https://unicode-table.com/en/search/?q=Regional+Indicator+Symbol+Letter).
 * Calculated by adding two UTF-16 codes, a reference offset (127397) and a letter (A), (127397 + A => 127397 + 65 => [Regional Indicator Symbol Letter A](https://unicode-table.com/en/1F1E6/).
 * When ran twice for both letters, String.fromCodePoint( ???? + ???? ) => ????????
 * @param {string} countryCode Two digit country code (eg. 'US').
 * @returns Returns flag emoji.
 * @example getCountryFlagEmoji('US') => ????????
 */
export const getCountryFlagEmoji = countryCode => {
	const indexOffsetRef = 127397;
	const codePoints = countryCode.toUpperCase().split('').map(char => indexOffsetRef + char.charCodeAt()); // prettier-ignore
	return String.fromCodePoint(...codePoints);
};
