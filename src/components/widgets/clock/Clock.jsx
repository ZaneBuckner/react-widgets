import { useState, useEffect } from 'react';
import ClockProgressWheel from './ClockProgressWheel';
import ClockFace from './ClockFace';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetModal from 'components/widgets/WidgetModal';
import { About } from './ClockModal';

import { StyledClock } from './Clock.styled';
import { BsClock as ClockIcon } from 'react-icons/bs';

function Clock() {
	const [clockData, setClockData] = useState([]);
	const [seconds, setSeconds] = useState(null);
	const [isAboutModal, setIsAboutModal] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);

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
		const interval = setInterval(() => getClockData(), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Card>
			<CardHeader
				name='Clock'
				icon={<ClockIcon />}
				widgetRef='clock'
				onAboutToggle={handleAboutToggle}
			/>
			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<ClockIcon className='widget-icon' />}
						javaScriptTime={Math.floor(Date.now())}
						unixTime={Math.floor(Date.now() / 1000)}
					/>
				}
			/>
			<StyledClock>
				<ClockProgressWheel seconds={seconds} />
				<ClockFace time={clockData.time} date={clockData.date} />
			</StyledClock>
		</Card>
	);
}

export default Clock;
