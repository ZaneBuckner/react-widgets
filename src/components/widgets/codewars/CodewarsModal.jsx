import styled from 'styled-components';

import DifficultyBadge from './DifficultyBadge';

const StyledIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	margin: 1rem;
`;

const StyledHeader = styled.h1`
	margin-top: 1.5rem !important;
`;

const StyledBadges = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	place-items: center;
	width: 100%;
`;

const StyledKey = styled.div`
	width: 100%;

	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;

		li {
			font-size: 0.8rem;
			font-weight: 400;
			text-transform: uppercase;
		}
	}

	.hardest {
		color: #866cc7;
	}

	.hard {
		color: #3c7ebb;
	}

	.medium {
		color: #ecb613;
	}

	.easy {
		color: #e6e6e6;
	}
`;

const DifficultyBadges = () => {
	const levels = [
		{ id: 1, color: 'purple', name: '1 kyu' },
		{ id: 2, color: 'purple', name: '2 kyu' },
		{ id: 3, color: 'blue', name: '3 kyu' },
		{ id: 4, color: 'blue', name: '4 kyu' },
		{ id: 5, color: 'yellow', name: '5 kyu' },
		{ id: 6, color: 'yellow', name: '6 kyu' },
		{ id: 7, color: 'white', name: '7 kyu' },
		{ id: 8, color: 'white', name: '8 kyu' },
	];

	return levels.map(level => (
		<DifficultyBadge key={level.id} rankColor={level.color} rankName={level.name} />
	));
};

const hyperlink = (
	<a
		href='https://www.codewars.com/dashboard'
		target='_blank'
		rel='noopener noreferrer'
		className='hyperlink'
		children='Codewars'
	/>
);

export function About({ widgetIcon }) {
	return (
		<>
			<StyledIcon>{widgetIcon}</StyledIcon>
			<StyledHeader className='header'>Codewars Dashboard</StyledHeader>
			<h2 className='subheader'>
				{hyperlink} is a platform where developers can improve their coding prowess by solving
				challenges at various difficulty levels.
			</h2>
			<StyledBadges className='body'>
				<DifficultyBadges />
			</StyledBadges>
			<StyledKey>
				<ul>
					<li className='hardest'>Hardest</li>
					<li className='hard'>Hard</li>
					<li className='medium'>Medium</li>
					<li className='easy'>Easy</li>
				</ul>
			</StyledKey>
		</>
	);
}
