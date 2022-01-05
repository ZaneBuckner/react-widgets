import { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledChallengeDescription } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';
import Button from '../../shared/Button';

function ChallengeDetails({ selectedChallenge }) {
	const [description, setDescription] = useState([]);

	useEffect(() => {
		fetchDescription(selectedChallenge.id);
	}, [selectedChallenge]);

	const fetchDescription = async challengeId => {
		try {
			const res = await axios.get(`https://www.codewars.com/api/v1/code-challenges/${challengeId}`);
			setDescription({
				name: res.data.name,
				tags: res.data.tags,
				url: res.data.url,
				description: res.data.description,
				rankName: res.data.rank.name,
				rankColor: res.data.rank.color,
			});
		} catch (err) {
			console.log(err.res.data);
			console.log(err.res.status);
			console.log(err.res.headers);
		}
	};

	const convertDate = jsonDate => {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		const date = new Date(jsonDate);
		const day = date.getDate();
		const month = months[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	};

	return (
		<StyledChallengeDescription>
			<h1>{description.name}</h1>
			<DifficultyBadge rankColor={description.rankColor} rankName={description.rankName} />
			<p>{convertDate(selectedChallenge.completedAt)}</p>
			<Button>
				<a href={description.url} target='_blank' rel='noopener noreferrer'>
					Go To Challenge
				</a>
			</Button>
		</StyledChallengeDescription>
	);
}

export default ChallengeDetails;
