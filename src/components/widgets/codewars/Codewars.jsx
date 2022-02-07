import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';

import WidgetModal from '../WidgetModal';
import { About } from './CodewarsModal';

import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import { StyledCodewars, StyledChallengeDetails } from './Codewars.styled';
import CodewarsIcon from 'Assets/CodewarsIcon';

function Codewars() {
	const [userInput, setUserInput] = useState('Zaniac');
	const [selectedChallenge, setSelectedChallenge] = useState(null);
	const [isAboutModal, setIsAboutModal] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(!isAboutModal);

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
				onAboutToggle={handleAboutToggle}
			/>

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<CodewarsIcon className='widget-icon' height={'1.5rem'} fill={'#DAB55D'} />}
					/>
				}
			/>

			<StyledCodewars>
				<UserProfile user={userInput} />
				<ChallengesList user={userInput} setSelectedChallenge={setSelectedChallenge} />
				{selectedChallenge ? challegeDetails : awaitChallengeDetails}
			</StyledCodewars>
		</Card>
	);
}

export default Codewars;
