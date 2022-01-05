import { StyledChallengesCompleted } from './Codewars.styled';

function ChallengeList({ challenges, setSelectedChallenge }) {
	return (
		<StyledChallengesCompleted>
			{challenges.map(challenge => (
				<li className='challenge-item' key={challenge.id} onClick={() => setSelectedChallenge(challenge)}>
					{challenge.name}
				</li>
			))}
		</StyledChallengesCompleted>
	);
}

export default ChallengeList;
