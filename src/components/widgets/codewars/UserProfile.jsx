import useAxios from 'hooks/useAxios';

import { StyledUserProfile } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';

function UserProfile({ url, username }) {
	const { data, loading, error } = useAxios(url);

	const ProfileItem = ({ title, value }) => {
		return (
			<div className='item'>
				<h2>{title}</h2>
				<p>{value}</p>
			</div>
		);
	};

	if (loading) {
		return (
			<StyledUserProfile>
				<p className='user-message'>Loading Profile...</p>
			</StyledUserProfile>
		);
	}

	if (error) {
		return (
			<StyledUserProfile>
				<p className='user-message'>
					Unable to find user: <span>{username}</span>
				</p>
			</StyledUserProfile>
		);
	}

	return (
		<StyledUserProfile>
			<div className='user-header'>
				<h1>{data.username}</h1>
				<DifficultyBadge rankColor={data.ranks.overall.color} rankName={data.ranks.overall.name} />
			</div>
			<ProfileItem title='Honor' value={data.honor} />
			<ProfileItem title='Completed' value={data.codeChallenges.totalCompleted} />
			<ProfileItem title='Position' value={data.leaderboardPosition} />
		</StyledUserProfile>
	);
}

export default UserProfile;
