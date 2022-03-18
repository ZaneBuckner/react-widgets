import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFormattedDate } from 'utils/util';

import DifficultyBadge from './DifficultyBadge';

import CircleLoader from 'react-spinners/CircleLoader';
import { HiBadgeCheck as CompletedIcon } from 'react-icons/hi';
import { GiProgression as PassRateIcon } from 'react-icons/gi';

export default function ChallengeDetails({ url, challenge, username }) {
	const [challengeData, setChallengeData] = useState(null);

	const fetchChallengeDetails = async url => {
		try {
			const response = await fetch(url);
			const data = await response.json();

			const { month, year } = getFormattedDate(challenge.completedAt);
			const formatPassRate = ((data.totalCompleted / data.totalAttempts) * 100).toFixed(0);

			setChallengeData({
				name: data.name,
				rankBadge: <DifficultyBadge rank={data.rank.name} color={data.rank.color} />,
				completedAt: `${month} ${year}`,
				passRate: `${formatPassRate}%`,
				url: data.url,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// FETCH CHALLENGE DETAILS => WHEN A CHALLENGE IS SELECTED
	useEffect(() => url && fetchChallengeDetails(url), [url]); // eslint-disable-line react-hooks/exhaustive-deps

	// RESET CHALLENGE DETAILS => WHEN A USERNAME IS SEARCHED
	useEffect(() => username && setChallengeData(null), [username]);

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
		<StyledChallengeDetails>
			{!challengeData ? (
				<StyledAwaitSelect>
					<h1>Details</h1>
					<p>Select a challenge</p>
					<CircleLoader
						loading={!challengeData}
						speedMultiplier={0.4}
						color={'#DAB55D'}
						size='5em'
						css={{ margin: 'auto 0', transform: 'scale(1.5)' }}
					/>
				</StyledAwaitSelect>
			) : (
				<>
					<div className='header-wrapper'>
						<a href={challengeData.url} target='_blank' rel='noopener noreferrer'>
							<h1 className='overflow-x-fade'>{challengeData.name}</h1>
						</a>
						{challengeData.rankBadge}
					</div>
					<div className='stats-wrapper'>
						<StatItem
							icon={<CompletedIcon />}
							title='Completed'
							value={challengeData.completedAt}
						/>
						<StatItem icon={<PassRateIcon />} title='Pass Rate' value={challengeData.passRate} />
					</div>
				</>
			)}
		</StyledChallengeDetails>
	);
}

const StyledAwaitSelect = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;

	h1 {
		font-size: 1.6em;
		font-weight: 300;
	}

	p {
		font-size: 1.2em;
		font-weight: 400;
	}
`;

const StyledChallengeDetails = styled.div`
	border: 0.1px solid lightsblue;
	max-width: 15rem;

	.header-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			width: clamp(4rem, 23vw, 15rem);
			font-size: 1.6em;
			font-weight: 300;

			&:hover {
				cursor: pointer;
				color: #dab55d;
			}
		}
	}

	.stats-wrapper {
		display: grid;
		grid-template-rows: repeat(2, auto);
		grid-row-gap: 1rem;
		width: 100%;
		margin: auto 0;
	}
`;
