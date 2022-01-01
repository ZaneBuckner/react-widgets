import { useState, useEffect } from 'react';
import Card from '../../shared/Card';
import { StyledClock } from './Clock.styled';

// import ClockTime from './ClockTime';
// import ClockDate from './ClockDate';
// import ClockProgress from './ClockProgress';

import ClockFace from './ClockFace';

function Clock() {
	const [clockData, setClockData] = useState([]);

	const getClockData = () => {
		let date = new Date();

		setClockData({
			date: {
				weekday: date.getDay(),
				day: date.getDate(),
				month: date.getMonth(),
				year: date.getFullYear(),
			},
			time: {
				hours: date.getHours(),
				minutes: date.getMinutes(),
				seconds: date.getSeconds(),
				meridian: date.getHours() < 12 ? 'AM' : 'PM',
			},
		});
	};

	useEffect(() => {
		setInterval(() => getClockData(), 1000);
	}, []);

	return (
		<Card>
			<StyledClock>
				<ClockFace time={clockData.time} date={clockData.date} />
			</StyledClock>
		</Card>
	);
}

export default Clock;

// const data = {
// 	date: {
// 		day: date.getDate(),
// 		month: months[date.getMonth()],
// 		year: date.getFullYear(),
// 	},
// 	time: {
// 		hours: (date.getHours() + 24) % 12 || 12,
// 		minutes: formatPadStart(date.getMinutes()),
// 		seconds: formatPadStart(date.getSeconds()),
// 		meridian: getMeridian(),
// 	},
// };
