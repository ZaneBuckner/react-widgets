import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import styled from 'styled-components';

import DifficultyBadge from './DifficultyBadge';
import UserAlert from 'components/shared/UserAlerts';

import { GiAchievement as HonorIcon } from 'react-icons/gi';
import { HiBadgeCheck as CompletedIcon } from 'react-icons/hi';
import { MdLeaderboard as LeaderboardIcon } from 'react-icons/md';

export default function UserProfile({ url, loader, setSearchError }) {
	const { data, loading, error } = useAxios(url);

	// SET SEARCH ERROR OR RESET AS DEFAULT (FALSY) VALUE => WHEN DATA IS FETCHED
	useEffect(() => (error ? setSearchError(true) : setSearchError(false)), [error]); // eslint-disable-line react-hooks/exhaustive-deps

	const StatItem = ({ icon, title, value }) => (
		<div className='stat'>
			<div className='stat-header'>
				{icon}
				<h2>{title}</h2>
			</div>
			<p className='stat-value'>{value}</p>
		</div>
	);

	return (
		<StyledUserProfile>
			{loading && <StyledUserProfile>{loader}</StyledUserProfile>}
			{error && <UserAlert variant='error' message='User Not Found' />}
			{data && !error && (
				<>
					<div className='header-wrapper'>
						<DifficultyBadge rank={data.ranks.overall.name} color={data.ranks.overall.color} />
						<h1 className='overflow-x-fade'>{data.username}</h1>
					</div>
					<div className='stats-wrapper'>
						<StatItem icon={<HonorIcon />} title='Honor' value={data.honor} />
						<StatItem
							icon={<CompletedIcon />}
							title='Total'
							value={data.codeChallenges.totalCompleted}
						/>
						<StatItem
							icon={<LeaderboardIcon />}
							title='Position'
							value={`# ${data?.leaderboardPosition || '\u2731\u2731\u2731'}`}
						/>
					</div>
				</>
			)}
		</StyledUserProfile>
	);
}

const StyledUserProfile = styled.div`
	max-width: 15rem;

	.header-wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-column-gap: 0.5rem;
		align-items: center;
		width: 100%;

		h1 {
			font-size: 1.8em;
			font-weight: 400;
		}
	}

	.stats-wrapper {
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-row-gap: 1rem;
		width: 100%;
		margin: auto 0;
	}
`;
