import { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledDifficultyBadge } from './DifficultyBadge';

function CodewarsUser() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		async function fetchUser() {
			const response = await axios('https://www.codewars.com/api/v1/users/Zaniac/');
			const data = response.data;
			setUser(data);
		}
		fetchUser();
		// console.log(user);
	}, []);

	// useEffect(() => {
	// 	async function fetchUser() {
	// 		const response = await fetch('https://www.codewars.com/api/v1/users/Zaniac/');
	// 		const data = await response.json();
	// 		setUser(data);
	// 		console.log(data);
	// 	}
	// 	fetchUser();
	// }, []);

	return (
		<div className='codewars-user'>
			{/* {user && <h2>{user.ranks.rank}</h2>} */}
			<h2>{user.username}</h2>
			{/* <StyledDifficultyBadge difficulty={user.ranks.overall.color}>
					<h1>{user.ranks.overall.name}</h1>
				</StyledDifficultyBadge> */}
		</div>
	);
}

export default CodewarsUser;
