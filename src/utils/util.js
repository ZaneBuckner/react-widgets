export const formatUnixTime = unixTime => {
	let date = new Date(unixTime * 1000);
	let hours = (date.getHours() + 24) % 12 || 12;
	let minutes = date.getMinutes().toString().padStart(2, '0');
	let meridian = date.getHours() < 12 ? 'AM' : 'PM';
	return `${hours}:${minutes} ${meridian}`;
};
