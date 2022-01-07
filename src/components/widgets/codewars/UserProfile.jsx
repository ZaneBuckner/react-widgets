import useAxios from 'hooks/useAxios';

import { StyledUserProfile } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';

function UserProfile({ user }) {
	const url = `https://www.codewars.com/api/v1/users/${user}/`;
	const { data, loading, error } = useAxios(url);

	const details = (title, value) => {
		return (
			<div className='item'>
				<h2>{title}</h2>
				<p>{value}</p>
			</div>
		);
	};

	const preRender = {
		loading: <p className='user-message'>Loading Profile...</p>,
		error: (
			<p className='user-message'>
				Unable to find user: <span>{user}</span>
			</p>
		),
	};

	if (loading) return preRender.loading;
	if (error) return preRender.error;
	return (
		<StyledUserProfile>
			<div className='user-header'>
				<h1>{data.username}</h1>
				<DifficultyBadge rankColor={data.ranks.overall.color} rankName={data.ranks.overall.name} />
			</div>
			{details('Honor', data.honor)}
			{details('Completed', data.codeChallenges.totalCompleted)}
			{details('Position', data.leaderboardPosition)}
		</StyledUserProfile>
	);
}

export default UserProfile;
