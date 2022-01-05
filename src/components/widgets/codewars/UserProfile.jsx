import { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledUserProfile } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';

function CodewarsUser({ userName }) {
	const [userProfile, setUserProfile] = useState([]);

	useEffect(() => {
		const fetchUserProfile = async userName => {
			try {
				const res = await axios.get(`https://www.codewars.com/api/v1/users/${userName}/`);
				setUserProfile({
					username: res.data.username,
					leaderboard: res.data.leaderboardPosition,
					honor: res.data.honor,
					rank: res.data.ranks.overall.name,
					color: res.data.ranks.overall.color,
					score: res.data.ranks.overall.score,
					completedCount: res.data.codeChallenges.totalCompleted,
				});
			} catch (err) {
				console.log(err.res.data);
				console.log(err.res.status);
				console.log(err.res.headers);
			}
		};
		fetchUserProfile(userName);
	}, [userName]);

	return (
		<StyledUserProfile>
			<div className='user-header'>
				<h1>{userProfile.username}</h1>
				<DifficultyBadge rankColor={userProfile.color} rankName={userProfile.rank} />
			</div>
			<div className='item'>
				<h2>Honor</h2>
				<p>{userProfile.honor}</p>
			</div>
			<div className='item'>
				<h2>Completed</h2>
				<p>{userProfile.completedCount}</p>
			</div>
			<div className='item'>
				<h2>Position</h2>
				<p>{userProfile.leaderboard}</p>
			</div>
		</StyledUserProfile>
	);
}

export default CodewarsUser;
