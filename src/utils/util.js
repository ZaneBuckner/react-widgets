export const formatUnixTime = unixTime => {
	let date = new Date(unixTime * 1000);
	let hours = (date.getHours() + 24) % 12 || 12;
	let minutes = date.getMinutes().toString().padStart(2, '0');
	let meridian = date.getHours() < 12 ? 'AM' : 'PM';
	return `${hours}:${minutes} ${meridian}`;
};

export const getFormatedDate = () => {
	const monthList = [
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
	const weekdayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const date = new Date();
	let day = date.getDate();
	let week = date.getDay();
	let month = date.getMonth();
	let time = formatUnixTime(date / 1000);
	return `${weekdayList[week]} ${monthList[month]} ${day} @ ${time}`;
};
