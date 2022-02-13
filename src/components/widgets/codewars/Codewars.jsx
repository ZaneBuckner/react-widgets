import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';

import WidgetModal from '../WidgetModal';
import { About } from './CodewarsModal';
import WidgetSearch from '../WidgetSearch';

import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import { StyledCodewars, StyledChallengeDetails } from './Codewars.styled';
import CodewarsIcon from 'Assets/CodewarsIcon';

function Codewars() {
	const [userInput, setUserInput] = useState('Zaniac');
	const [selectedChallenge, setSelectedChallenge] = useState(null);
	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);

	const handleSearchToggle = () => setIsSearch(isSearch => !isSearch);
	const handleSearchSubmit = e => e.key === 'Enter' && setUserInput(e.target.value);

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
				widgetSearch={
					<WidgetSearch
						open={isSearch}
						onToggle={handleSearchToggle}
						onSubmit={handleSearchSubmit}
						placeholder='Search Codewars username'
					/>
				}
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
