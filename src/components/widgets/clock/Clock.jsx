import { useState, useEffect } from 'react';
import ClockProgressWheel from './ClockProgressWheel';
import ClockFace from './ClockFace';

import Card from '../../shared/Card';
import { StyledClock } from './Clock.styled';
import { BsClock as ClockIcon } from 'react-icons/bs';

function Clock() {
	const [clockData, setClockData] = useState([]);
	const [seconds, setSeconds] = useState(null);

	const getClockData = () => {
		let date = new Date();

		setSeconds(date.getSeconds());
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
				meridian: date.getHours() < 12 ? 'AM' : 'PM',
			},
		});
	};

	useEffect(() => {
		setInterval(() => getClockData(), 1000);
	}, []);

	return (
		<Card widgetName='Analogue Clock' icon={<ClockIcon />}>
			<StyledClock>
				<ClockProgressWheel seconds={seconds} />
				<ClockFace time={clockData.time} date={clockData.date} />
			</StyledClock>
		</Card>
	);
}

export default Clock;
