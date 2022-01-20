import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';

import CodewarsModal from './CodewarsModal';
import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import { StyledCodewars, StyledChallengeDetails } from './Codewars.styled';
import CodewarsIcon from 'Assets/CodewarsIcon';

function Codewars() {
	const [userInput, setUserInput] = useState('Zaniac');
	const [showModal, setShowModal] = useState(false);
	const [selectedChallenge, setSelectedChallenge] = useState(null);

	const challegeDetails = <ChallengeDetails selectedChallenge={selectedChallenge} />;
	const awaitChallengeDetails = (
		<StyledChallengeDetails>
			<p className='user-message'>Select a challenge for details.</p>
		</StyledChallengeDetails>
	);

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
				<CodewarsIcon />
				<h1 className='modal-title'>Codewars Dashboard</h1>
				<p className='modal-usage'>
					<a href='https://www.codewars.com/dashboard' target='_blank' rel='noopener noreferrer'>
						Codewars
					</a>
					&nbsp;is a platform where developers can improve their coding prowess by solving
					challenges at various difficulty levels.
				</p>
				{/* <p className='modal-usage'>For a new painting, select the {<RefreshIcon />} icon.</p> */}
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
