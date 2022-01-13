import useAxios from 'hooks/useAxios';

import { StyledChallengeDetails } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';

function ChallengeDetails({ selectedChallenge }) {
	const url = `https://www.codewars.com/api/v1/code-challenges/${selectedChallenge.id}`;
	const { data, loading, error } = useAxios(url);

	const convertDate = jsonDate => {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'June',
			'July',
			'Aug',
			'Sept',
			'Oct',
			'Nov',
			'Dec',
		];
		const date = new Date(jsonDate);
		const month = months[date.getMonth()];
		const year = date.getFullYear();
		return `${month} ${year}`;
	};

	const completionRate = () => {
		const percentage = ((data.totalCompleted / data.totalAttempts) * 100).toFixed(1);
		return `${percentage}%`;
	};

	const details = (title, value) => {
		return (
			<div className='item'>
				<h2>{title}</h2>
				<p>{value}</p>
			</div>
		);
	};

	const preRender = {
		loading: <p className='user-message'>Loading Details...</p>,
		error: <p className='user-message'>Unable to find challenge details.</p>,
	};

	if (loading) return preRender.loading;
	if (error) return preRender.error;
	return (
		<StyledChallengeDetails>
			<div className='details-header'>
				<a href={data.url} target='_blank' rel='noopener noreferrer'>
					<h1>{data.name}</h1>
				</a>
				<DifficultyBadge rankColor={data.rank.color} rankName={data.rank.name} />
			</div>
			{details('Completed', convertDate(selectedChallenge.completedAt))}
			{details('Completion Rate', completionRate())}
		</StyledChallengeDetails>
	);
}

export default ChallengeDetails;
