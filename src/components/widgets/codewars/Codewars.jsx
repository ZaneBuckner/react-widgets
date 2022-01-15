import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';

import CodewarsModal from './CodewarsModal';
import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import { StyledCodewars } from './Codewars.styled';
import CodewarsIcon from 'Assets/CodewarsIcon';

function Codewars() {
	const [userInput, setUserInput] = useState('Zaniac');
	const [showModal, setShowModal] = useState(false);
	const [selectedChallenge, setSelectedChallenge] = useState(null);

	const challegeDetails = <ChallengeDetails selectedChallenge={selectedChallenge} />;
	const awaitChallengeDetails = <p className='user-message'>Select a challenge for details.</p>;

	return (
		<Card>
			<CardHeader
				name='Codewars'
				icon={<CodewarsIcon />}
				placeholder='Search User'
				widgetRef='codewars'
				setUserInput={setUserInput}
				setShowModal={setShowModal}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<CodewarsModal />
			</Modal>
			<StyledCodewars>
				<UserProfile user={userInput} />
				<ChallengesList user={userInput} setSelectedChallenge={setSelectedChallenge} />
				{selectedChallenge ? challegeDetails : awaitChallengeDetails}
			</StyledCodewars>
		</Card>
	);
}

export default Codewars;
