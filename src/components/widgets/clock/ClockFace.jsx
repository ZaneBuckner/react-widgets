import { CircularProgressbar } from 'react-circular-progressbar';
import { ClockTimeDisplay, ClockDateDisplay } from './Clock.styled';

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

	// GITHUB: https://github.com/kevinsqi/react-circular-progressbar
	// USEFUL REF: https://www.npmjs.com/package/react-circular-progressbar

	const progressBarDisplay = seconds => {
		let percentage = ((seconds * 100) / 59).toFixed(0);

		return (
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				styles={{
					root: {},
					path: {
						stroke: `rgb(218,181,93)`,
						strokeWidth: '3px',
						strokeLinecap: 'butt',
						transition: 'stroke-dashoffset 0.5s ease-in-out 0s',
						transformOrigin: 'center center',
					},
					trail: {
						// stroke: '#B3B3B3',
						strokeWidth: '1px',
						strokeLinecap: 'butt',
						transform: 'rotate(0.25turn)',
						transformOrigin: 'center center',
					},
					text: {
						display: 'none',
						fill: '#f88',
						fontSize: '16px',
					},
				}}
			/>
		);
	};

	return (
		<div className='clock-face'>
			{time && progressBarDisplay(time.seconds)}
			{time && (
				<ClockTimeDisplay>
					<h1 className='primary'>
						{applyNonMilitary(time.hours)}:{formatPadStart(time.minutes)}
					</h1>
					<div className='secondary'>
						<h1>{time.meridian}</h1>
					</div>
				</ClockTimeDisplay>
			)}
			{date && (
				<ClockDateDisplay>
					<h2>{weekdays[date.weekday]}</h2>
					<h2 className='day'>{date.day}</h2>
					<h2>{months[date.month]}</h2>
				</ClockDateDisplay>
			)}
		</div>
	);
}

export default ClockFace;
