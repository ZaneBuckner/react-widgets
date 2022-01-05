import styled from 'styled-components';

const handleDifficulty = difficulty => {
	switch (difficulty) {
		case 'white':
			return '#E6E6E6';
		case 'yellow':
			return '#ECB613';
		case 'blue':
			return '#3C7EBB';
		case 'purple':
			return '#866CC7';
		default:
			return '#FFF';
	}
};

export const StyledDifficultyBadge = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 1.5rem;
	background: ${({ difficulty }) => handleDifficulty(difficulty)};
	clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%);

	::before {
		content: '';
		position: absolute;
		width: 90%;
		height: 85%;
		background: #242424;
		clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%);
	}

	p {
		position: absolute;
		font-family: 'Lato';
		font-size: 0.8rem;
		font-weight: 500;
		color: ${({ difficulty }) => handleDifficulty(difficulty)};
	}
`;

function DifficultyBadge({ rankColor, rankName }) {
	return (
		<StyledDifficultyBadge difficulty={rankColor}>
			<p>{rankName}</p>
		</StyledDifficultyBadge>
	);
}

export default DifficultyBadge;
