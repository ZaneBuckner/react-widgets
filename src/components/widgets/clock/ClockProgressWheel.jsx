import { CircularProgressbar } from 'react-circular-progressbar';

function ClockProgressWheel({ seconds }) {
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

	return <>{progressBarDisplay(seconds)}</>;
}

export default ClockProgressWheel;
