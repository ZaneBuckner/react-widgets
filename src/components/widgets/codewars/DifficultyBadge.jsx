import styled from 'styled-components';

export default function DifficultyBadge({ rank, color, height, fontSize }) {
	return (
		<StyledDifficultBadge
			className='rank-badge'
			rank={rank}
			color={color}
			height={height}
			fontSize={fontSize}
		>
			<span>{rank}</span>
		</StyledDifficultBadge>
	);
}

const handleDifficultyColor = color => {
	switch (color) {
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

const StyledDifficultBadge = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ height }) => height || '1.6em'};
	aspect-ratio: 2 / 1;
	background: ${({ color }) => handleDifficultyColor(color)};
	clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%);

	::before {
		content: '';
		position: absolute;
		width: 90%;
		height: 85%;
		background: #242424;
		clip-path: polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%);
	}

	span {
		position: absolute;
		font-family: 'Lato';
		font-size: ${({ fontSize }) => fontSize || '0.8em'};
		font-weight: 500;
		color: ${({ color }) => handleDifficultyColor(color)};
	}
`;
