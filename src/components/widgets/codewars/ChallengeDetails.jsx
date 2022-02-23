import { useState, useEffect } from 'react';
import { getFormattedDate } from 'utils/util';

import { StyledChallengeDetails } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';

function ChallengeDetails({ url, challenge }) {
	const [data, setData] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const [completionDate, setCompletionDate] = useState('');
	const [completionRate, setCompletionRate] = useState('');

	const DetailsItem = ({ title, value }) => {
		return (
			<div className='item'>
				<h2>{title}</h2>
				<p>{value}</p>
			</div>
		);
	};

	// FETCH CHALLENGE DETAILS => WHEN CHALLENGE IS SELECTED
	useEffect(() => {
		const fetchChallengeDetails = async url => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
			} catch (err) {
				setError(true);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};
		url && fetchChallengeDetails(url);
	}, [url]);

	useEffect(() => {
		if (data) {
			const { month, year } = getFormattedDate(challenge.completedAt);
			const rate = ((data.totalCompleted / data.totalAttempts) * 100).toFixed(0);
			setCompletionDate(`${month} ${year}`);
			setCompletionRate(`${rate}%`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	if (!data) {
		return (
			<StyledChallengeDetails>
				<p className='user-message'>Select a challenge for details.</p>
			</StyledChallengeDetails>
		);
	}

	if (error) {
		return (
			<StyledChallengeDetails>
				<p className='user-message'>Unable to find challenge details.</p>
			</StyledChallengeDetails>
		);
	}

	if (loading) {
		return (
			<StyledChallengeDetails>
				<p className='user-message'>Loading Details...</p>
			</StyledChallengeDetails>
		);
	}

	return (
		<StyledChallengeDetails>
			<div className='details-header'>
				<a href={data.url} target='_blank' rel='noopener noreferrer'>
					<h1>{data.name}</h1>
				</a>
				<DifficultyBadge rankColor={data.rank.color} rankName={data.rank.name} />
			</div>
			<DetailsItem title='Completed' value={completionDate} />
			<DetailsItem title='Pass Rate' value={completionRate} />
		</StyledChallengeDetails>
	);
}

export default ChallengeDetails;
