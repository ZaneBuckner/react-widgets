import { useState, useEffect } from 'react';

function ChallengeList({ challenges }) {
	const [hoveredChallenge, setHoveredChallenge] = useState(challenges.id);
	const [challengeDetails, setChallengeDetails] = useState([]);

	const convertDate = jsonDate => {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		const date = new Date(jsonDate);
		const day = date.getDate();
		const month = months[date.getMonth()];
		// const year = date.getFullYear().toString().split('0')[1];
		// return `${day} ${month} '${year}`;
		return `${month} ${day}`;
	};

	useEffect(() => {
		async function fetchChallengeDetails(hoveredChallenge) {
			const response = await fetch(`https://www.codewars.com/api/v1/code-challenges/${hoveredChallenge}`);
			const data = await response.json();
			setChallengeDetails(data);
			// const description = data.description.split('.')[0];
			// console.log(description);
		}
		// console.log(hoveredChallenge);
	}, [hoveredChallenge]);

	return (
		<div className='challenges-list'>
			{/* <div className='date-completed'>{challenges && challenges.map(challenge => <p key={challenge.id}>{convertDate(challenge.completedAt)}</p>)}</div> */}
			<div className='title'>
				{challenges.map(challenge => (
					<p className='challenge-item' key={challenge.id} onMouseEnter={() => setHoveredChallenge(challenge.id)}>
						{challenge.name}
					</p>
				))}
				{/* {challenges &&
					challenges.map(challenge => (
						<p className='challenge-item' key={challenge.id} onMouseEnter={() => fetchChallengeDetails(challenge.id)}>
							{challenge.name}
						</p>
					))} */}
			</div>
			<div className='challenge-details'>
				{/* <h2>{challengeDetails.name}</h2> */}
				{/* <p>{challengeDetails.description}</p> */}
			</div>
		</div>
	);
}

export default ChallengeList;
