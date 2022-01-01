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

export const Styled = styled.div`
	.child {
		background: ${({ difficulty }) => handleDifficulty(difficulty)};
	}
`;
