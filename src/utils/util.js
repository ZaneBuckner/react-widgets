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
 * @param {object} setUserLocation Method to set user location state.
 * @returns {Promise<object>} Returns location data object.
 * @example
 * const userLocation = await getUserLocation();
 * userLocation => { zip: 70401, state: 'LA', city: 'Hammond' }
 */
export const fetchUserLocation = (setUserLocation, setLoading) => {
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

			setUserLocation({
				city: data.results[0].city,
				state: data.results[0].state_code,
				zip: data.results[0].postcode,
			});
		} catch (error) {
			console.log('Unable fetch location address.', error);
		} finally {
			setLoading(false);
		}
	};
};

/**
 * Fetches city name and state code from coordinates (using [OpenWeather](https://openweathermap.org/api/geocoding-api)).
 * @param {number} lat Latitude
 * @param {number} lon Longitude
 * @param {function} setState Updates component state.
 * @param {function} setLoading To update component on the loading state of this function.
 * @returns {Promise<object>} Returns object containing a city and state code.
 * @example
 * const [location, setLocation] = useState('');
 * setLocation(fetchLocationFromCoords(40.689247, -74.044502));
 * location => { city: 'New York', state: 'NY' }
 */
export const fetchLocationFromCoords = async (lat, lon, setState, setLoading) => {
	const api = {
		base: 'http://api.openweathermap.org/geo/1.0/reverse?',
		query: `lat=${lat}&lon=${lon}`,
		limit: `&limit=${1}`,
		key: `&appid=${process.env.REACT_APP_WIDGET_WEATHER_API_KEY}`,
	};

	const stateCodesRef = {
		Alabama: 'AL',
		Alaska: 'AK',
		'American Samoa': 'AS',
		Arizona: 'AZ',
		Arkansas: 'AR',
		California: 'CA',
		Colorado: 'CO',
		Connecticut: 'CT',
		Delaware: 'DE',
		'District Of Columbia': 'DC',
		'Federated States Of Micronesia': 'FM',
		Florida: 'FL',
		Georgia: 'GA',
		Guam: 'GU',
		Hawaii: 'HI',
		Idaho: 'ID',
		Illinois: 'IL',
		Indiana: 'IN',
		Iowa: 'IA',
		Kansas: 'KS',
		Kentucky: 'KY',
		Louisiana: 'LA',
		Maine: 'ME',
		'Marshall Islands': 'MH',
		Maryland: 'MD',
		Massachusetts: 'MA',
		Michigan: 'MI',
		Minnesota: 'MN',
		Mississippi: 'MS',
		Missouri: 'MO',
		Montana: 'MT',
		Nebraska: 'NE',
		Nevada: 'NV',
		'New Hampshire': 'NH',
		'New Jersey': 'NJ',
		'New Mexico': 'NM',
		'New York': 'NY',
		'North Carolina': 'NC',
		'North Dakota': 'ND',
		'Northern Mariana Islands': 'MP',
		Ohio: 'OH',
		Oklahoma: 'OK',
		Oregon: 'OR',
		Palau: 'PW',
		Pennsylvania: 'PA',
		'Puerto Rico': 'PR',
		'Rhode Island': 'RI',
		'South Carolina': 'SC',
		'South Dakota': 'SD',
		Tennessee: 'TN',
		Texas: 'TX',
		Utah: 'UT',
		Vermont: 'VT',
		'Virgin Islands': 'VI',
		Virginia: 'VA',
		Washington: 'WA',
		'West Virginia': 'WV',
		Wisconsin: 'WI',
		Wyoming: 'WY',
	};

	try {
		setLoading(true);
		const fetchURL = `${api.base}${api.query}${api.limit}${api.key}`;
		const response = await fetch(fetchURL);
		const data = await response.json();

		setState({
			city: data[0].name,
			state: stateCodesRef[data[0].state],
		});
	} catch (error) {
		console.log('Unable fetch location from coordinates.', error);
	} finally {
		setLoading(false);
	}
};
