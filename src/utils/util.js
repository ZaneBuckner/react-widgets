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
