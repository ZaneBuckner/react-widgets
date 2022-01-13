import { useState, useEffect } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import { StyledTimer } from './Timer.Styled';

import { MdTimer as TimerIcon } from 'react-icons/md';

function Timer() {
	const [showModal, setShowModal] = useState(false);

	return (
		<Card>
			<CardHeader name='Timer' icon={<TimerIcon />} widgetRef='timer' setShowModal={setShowModal} />
			<StyledTimer></StyledTimer>
		</Card>
	);
}

export default Timer;
