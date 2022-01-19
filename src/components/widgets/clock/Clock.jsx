import { useState, useEffect } from 'react';
import ClockProgressWheel from './ClockProgressWheel';
import ClockFace from './ClockFace';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import { StyledClock } from './Clock.styled';
import { BsClock as ClockIcon } from 'react-icons/bs';

function Clock() {
	const [clockData, setClockData] = useState([]);
	const [seconds, setSeconds] = useState(null);
	const [showModal, setShowModal] = useState(false);

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
			<CardHeader name='Clock' icon={<ClockIcon />} widgetRef='clock' setShowModal={setShowModal} />
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<ClockIcon />
				<h1 className='modal-title'>Analogue Clock</h1>
				<h2 className='modal-description'>Just a clock.</h2>
				<p className='modal-usage'>
					A&nbsp;
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date'
						target='_blank'
						rel='noopener noreferrer'
					>
						JavaScript date object&nbsp;
					</a>
					is defined as the number of milliseconds that have elapsed since midnight on January 1,
					1970, UTC.
				</p>
				<p className='modal-footer'>
					{Math.floor(Date.now())} &nbsp;➤&nbsp; {Math.floor(Date.now() / 1000)}
				</p>
			</Modal>
			<StyledClock>
				<ClockProgressWheel seconds={seconds} />
				<ClockFace time={clockData.time} date={clockData.date} />
			</StyledClock>
		</Card>
	);
}

export default Clock;
