import { useState, useEffect } from 'react';
import { CodewarsStyled } from './Codewars.styled';
import Card from '../../shared/Card';
import CodewarsUser from './CodewarsUser';
import ChallengeList from './ChallengeList';
import ChallengeDetails from './ChallengeDetails';

function Codewars() {
	// const [user, setUser] = useState([]);
	const [challenges, setChallenges] = useState([]);

	const api = {
		key: 'qM7RP4NU2jBCdGsBKsKi',
		base: 'https://www.codewars.com/api/v1/users/Zaniac/',
		challenges: 'code-challenges/completed/',
	};

	// async function fetchUser() {
	// 	const response = await fetch(`${api.base}`);
	// 	const data = await response.json();
	// 	setUser({
	// 		username: data.username,
	// 		honor: data.honor,
	// 		leaderboard: data.leaderboardPosition,
	// 		ranks: {
	// 			rank: data.ranks.overall.rank,
	// 			name: data.ranks.overall.name,
	// 			color: data.ranks.overall.color,
	// 			score: data.ranks.overall.score,
	// 		},
	// 	});
	// }

	async function fetchChallenges() {
		const response = await fetch(`${api.base}${api.challenges}`);
		const data = await response.json();
		setChallenges(data.data);
	}

	useEffect(() => {
		// fetchUser();
		fetchChallenges();
	}, []);

	return (
		<Card>
			<CodewarsStyled>
				<img src='https://dev.codewars.com/images/logo-220ae435.png' alt='Codewars Logo' />
				<CodewarsUser />
				{challenges && <ChallengeList challenges={challenges} />}
				{/* {challenges && <ChallengeDetails challenges={ } />} */}
			</CodewarsStyled>
		</Card>
	);
}

export default Codewars;
