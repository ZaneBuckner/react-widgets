import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';

import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetSearch from '../WidgetSearch';
import { AboutModal } from './CodewarsModal';

import { StyledCodewars } from './Codewars.styled';
import { CodewarsIcon } from 'Assets/WidgetIcons';

const api = {
	base: 'https://www.codewars.com/api/v1/',
};

function Codewars() {
	const { userData } = useAuthContext();
	const [username, setUsername] = useState(userData?.codewarsUsername || 'Zaniac');
	const [selectedChallenge, setSelectedChallenge] = useState(null);
	const [profileURL, setProfileURL] = useState('');
	const [challengesURL, setChallengesURL] = useState('');
	const [detailsURL, setDetailsURL] = useState('');

	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);
	const handleSearchToggle = () => setIsSearch(isSearch => !isSearch);
	const handleSearchSubmit = e => e.key === 'Enter' && setUsername(e.target.value);

	// SET FETCH URLS => ON MOUNT & WHEN USERNAME UPDATES
	useEffect(() => {
		if (username) {
			setProfileURL(`${api.base}/users/${username}`);
			setChallengesURL(`${api.base}/users/${username}/code-challenges/completed/`);
		}
	}, [username]);

	// SET CHALLENGE DETAILS URL => WHEN CHALLENGE IS SELECTED
	useEffect(() => {
		selectedChallenge && setDetailsURL(`${api.base}/code-challenges/${selectedChallenge.id}`);
	}, [selectedChallenge]);

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

			{profileURL && challengesURL && (
				<StyledCodewars>
					<UserProfile url={profileURL} username={username} />
					<ChallengesList url={challengesURL} setSelectedChallenge={setSelectedChallenge} />
					<ChallengeDetails url={detailsURL} challenge={selectedChallenge} />
				</StyledCodewars>
			)}

			<AboutModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				widgetIcon={<CodewarsIcon height='1.5rem' color='#DAB55D' />}
			/>
		</Card>
	);
}

export default Codewars;
