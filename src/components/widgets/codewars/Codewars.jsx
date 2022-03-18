import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import ChallengesList from './ChallengesList';
import ChallengeDetails from './ChallengeDetails';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetSearch from '../WidgetSearch';
import { AboutModal } from './CodewarsModal';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { CodewarsIcon } from 'Assets/WidgetIcons';

const apiBaseURL = 'https://www.codewars.com/api/v1/';

export default function Codewars() {
	const { userData } = useAuthContext();
	const [username, setUsername] = useState(userData?.codewarsUsername || 'Zaniac');
	const [selectedChallenge, setSelectedChallenge] = useState(null);
	const [profileURL, setProfileURL] = useState('');
	const [challengesURL, setChallengesURL] = useState('');
	const [detailsURL, setDetailsURL] = useState('');
	const [searchError, setSearchError] = useState(null);

	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);
	const handleSearchToggle = () => setIsSearch(isSearch => !isSearch);
	const handleSearchSubmit = e => e.key === 'Enter' && setUsername(e.target.value);

	// SET FETCH URLS => ON MOUNT & WHEN USERNAME UPDATES
	useEffect(() => {
		if (!username) return;
		setProfileURL(`${apiBaseURL}/users/${username}`);
		setChallengesURL(`${apiBaseURL}/users/${username}/code-challenges/completed/`);
	}, [username]);

	// SET CHALLENGE DETAILS URL => WHEN CHALLENGE IS SELECTED
	useEffect(() => {
		if (!selectedChallenge) return;
		setDetailsURL(`${apiBaseURL}/code-challenges/${selectedChallenge.id}`);
	}, [selectedChallenge]);

	const LoadingAnimation = loading => (
		<ScaleLoader
			loading={loading}
			speedMultiplier={1}
			color={'#DAB55D'}
			css={{ margin: 'auto 0', transform: 'scale(1.5)' }}
		/>
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

			{profileURL && challengesURL && (
				<StyledCodewars>
					<UserProfile
						url={profileURL}
						loader={<LoadingAnimation />}
						setSearchError={setSearchError}
					/>
					<ChallengesList
						url={challengesURL}
						onSelect={setSelectedChallenge}
						loader={<LoadingAnimation />}
						username={username}
					/>
					{!searchError && (
						<ChallengeDetails url={detailsURL} challenge={selectedChallenge} username={username} />
					)}
				</StyledCodewars>
			)}

			<AboutModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				widgetIcon={<CodewarsIcon className='widget-icon' height='1.5rem' />}
			/>
		</Card>
	);
}

const StyledCodewars = styled.div`
	display: grid;
	grid-template-columns: 3fr 5fr 3fr;
	justify-items: center;
	width: 100%;
	height: 15rem;

	font-size: clamp(7px, 2.5vw, 13px);
	font-family: 'Roboto', serif;
	color: #c3c3c3;

	/* PROFILE, CHALLENGE_LIST, & SELECTED_CHALLENGE PARENT DIVS */
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 100%;

		.stat-header {
			display: grid;
			grid-template-columns: 2fr 3fr;
			width: 100%;

			svg {
				justify-self: center;
				font-size: 1.5em;
				color: #dab55d;
			}

			h2 {
				display: flex;
				font-size: 1em;
				font-weight: 300;
				text-transform: uppercase;
			}
		}

		.stat-value {
			width: 100%;

			font-size: 1.3em;
			font-weight: 400;
			text-align: center;

			background-color: rgb(65 65 65);
			border-radius: 5px;
		}
	}

	.overflow-x-fade {
		padding-right: 2rem;

		white-space: nowrap;
		overflow-x: auto;
		overflow-y: hidden;

		/* TRANSPARENT TEXT FADES RIGHT INDICATING SCROLL */
		-webkit-mask-image: linear-gradient(to right, black 80%, transparent 95%);
		mask-image: linear-gradient(to right, black 80%, transparent 95%);
	}

	.overflow-y-fade {
		padding-bottom: 2rem;
		overflow-y: scroll;

		/* TRANSPARENT TEXT FADES DOWN INDICATING SCROLL */
		-webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 95%);
		mask-image: linear-gradient(to bottom, black 80%, transparent 95%);
	}
`;
