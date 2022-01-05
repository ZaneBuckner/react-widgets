import { useState, useEffect } from 'react';
import axios from 'axios';

import UserProfile from './UserProfile';
import ChallengesCompleted from './ChallengesCompleted';
import ChallengeDescription from './ChallengeDescription';

import Card from '../../shared/Card';
import { StyledDashboard } from './Codewars.styled';
import CodewarsIcon from '../../../Assets/CodewarsIcon';

function Codewars() {
	const [challenges, setChallenges] = useState([]);
	const [selectedChallenge, setSelectedChallenge] = useState(null);
	const userName = 'Zaniac';

	useEffect(() => {
		fetchChallenges();
	}, []);

	const fetchChallenges = async () => {
		try {
			const res = await axios.get(`https://www.codewars.com/api/v1/users/${userName}/code-challenges/completed/`);
			setChallenges(res.data.data);
		} catch (err) {
			console.log(err.res.data);
			console.log(err.res.status);
			console.log(err.res.headers);
		}
	};

	return (
		<Card widgetName='Codewars Dashboard' icon={<CodewarsIcon />}>
			<StyledDashboard>
				<UserProfile userName={userName} />
				<ChallengesCompleted challenges={challenges} setSelectedChallenge={setSelectedChallenge} />
				{selectedChallenge ? <ChallengeDescription selectedChallenge={selectedChallenge} /> : <p>Select a challenge for details.</p>}
			</StyledDashboard>
		</Card>
	);
}

export default Codewars;
