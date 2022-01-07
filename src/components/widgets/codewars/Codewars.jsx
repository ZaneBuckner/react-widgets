import { useState } from 'react';

import Modal from 'components/shared/Modal';
import CodewarsModal from './CodewarsModal';
import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import { StyledDashboard } from './Codewars.styled';
import CodewarsIcon from 'Assets/CodewarsIcon';
import InfoIcon from '@material-ui/icons/Info';
import CancelIcon from '@material-ui/icons/Cancel';

function Codewars() {
	const [user, setUser] = useState('Zaniac');
	const [showModal, setShowModal] = useState(false);
	// const [closeWidget, setCloseWidget] = useState(false);
	const [selectedChallenge, setSelectedChallenge] = useState(null);

	const handleModalState = () => setShowModal(prev => !prev);

	const handleCloseState = () => console.log('Widget Closed');

	const searchUser = e => e.key === 'Enter' && setUser(e.target.value);

	const challegeDetails = <ChallengeDetails selectedChallenge={selectedChallenge} />;
	const awaitChallengeDetails = <p className='user-message'>Select a challenge for details.</p>;

	return (
		<Card>
			<CardHeader widgetName='Codewars Dashboard' icon={<CodewarsIcon />}>
				<input type='text' placeholder='Search User' spellCheck='false' onKeyPress={searchUser} />
				<InfoIcon className='header-icon' onClick={handleModalState} />
				<CancelIcon className='header-icon' onClick={handleCloseState} />
			</CardHeader>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<CodewarsModal />
			</Modal>
			<StyledDashboard>
				<UserProfile user={user} />
				<ChallengesList user={user} setSelectedChallenge={setSelectedChallenge} />
				{selectedChallenge ? challegeDetails : awaitChallengeDetails}
			</StyledDashboard>
		</Card>
	);
}

export default Codewars;
