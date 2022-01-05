import { StyledClockFace, TimeDisplay, DateDisplay } from './Clock.styled';

function ClockFace({ time, date }) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const formatPadStart = num => {
		let str = num.toString();
		if (str.length > 2) return;
		return str.padStart(2, '0');
	};

	const applyNonMilitary = time => {
		return (time + 24) % 12 || 12;
	};

	return (
		<StyledClockFace>
			{time && (
				<TimeDisplay>
					<h1 className='primary'>
						{applyNonMilitary(time.hours)}:{formatPadStart(time.minutes)}
					</h1>
					<div className='secondary'>
						<h1>{time.meridian}</h1>
					</div>
				</TimeDisplay>
			)}
			{date && (
				<DateDisplay>
					<h2>{weekdays[date.weekday]}</h2>
					<h2 className='day'>{date.day}</h2>
					<h2>{months[date.month]}</h2>
				</DateDisplay>
			)}
		</StyledClockFace>
	);
}

export default ClockFace;
