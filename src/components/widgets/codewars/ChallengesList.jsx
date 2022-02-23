import useAxios from 'hooks/useAxios';

import { StyledChallengesList } from './Codewars.styled';

function ChallengesList({ url, setSelectedChallenge }) {
	const { data, loading, error } = useAxios(url);

	if (loading) {
		return (
			<StyledChallengesList>
				<p className='user-message'>Loading Challenges...</p>
			</StyledChallengesList>
		);
	}

	if (error) {
		return (
			<StyledChallengesList>
				<p className='user-message'>Unable to find completed challenges.</p>
			</StyledChallengesList>
		);
	}

	return (
		<StyledChallengesList>
			<ul>
				{data.data.map(challenge => (
					<li key={challenge.id} onClick={() => setSelectedChallenge(challenge)}>
						{challenge.name}
					</li>
				))}
			</ul>
		</StyledChallengesList>
	);
}

export default ChallengesList;
