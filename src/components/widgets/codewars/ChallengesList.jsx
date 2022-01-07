import useAxios from 'hooks/useAxios';
import { StyledChallengesList } from './Codewars.styled';

function ChallengesList({ user, setSelectedChallenge }) {
	const url = `https://www.codewars.com/api/v1/users/${user}/code-challenges/completed/`;
	const { data, loading, error } = useAxios(url);

	const mappedList = () => {
		const challenges = data.data;
		return challenges.map(challenge => (
			<li key={challenge.id} onClick={() => setSelectedChallenge(challenge)}>
				{challenge.name}
			</li>
		));
	};

	const preRender = {
		loading: <p className='user-message'>Loading Challenges...</p>,
		error: <p className='user-message'>Unable to find completed challenges.</p>,
	};

	if (loading) return preRender.loading;
	if (error) return preRender.error;
	return <StyledChallengesList>{mappedList()}</StyledChallengesList>;
}

export default ChallengesList;
