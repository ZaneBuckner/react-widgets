/** FORMATS JS DATE OBJECT
 * @param {num} timestamp - Epoch Time (milliseconds)
 * @returns Formatted Time Object
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

/** FORMATS JS DATE OBJECT
 * @param {num} timestamp - Epoch Time (milliseconds)
 * @returns Formatted Date Object
 */
export const getFormattedDate = (timestamp = Date.now()) => {
	const monthRef = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const weekdayRef = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const date = new Date(timestamp);

	return {
		day: date.getDate(),
		week: weekdayRef[date.getDay()],
		month: monthRef[date.getMonth()],
		year: date.getFullYear(),
	};
};

/** FORMATS FIREBASE ERROR CODE INTO OPINIONATED FORM
 * @param {str} errorCode - firebaseError.code
 * @returns FORMATTED MESSAGE (auth/invalid-email => Invalid Email)
 */
export const formatErrorCode = errorCode => {
	const words = errorCode.split('/')[1].split('-');
	const formatMessage = words.map(word => {
		return `${word[0].toUpperCase()}${word.substring(1)}`;
	});
	return formatMessage.join(' ');
};
