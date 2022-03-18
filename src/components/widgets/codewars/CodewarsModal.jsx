import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import WidgetModal from '../WidgetModal';
import DifficultyBadge from './DifficultyBadge';

const badgesRef = [
	{ rank: '1 kyu', color: 'purple' },
	{ rank: '3 kyu', color: 'blue' },
	{ rank: '5 kyu', color: 'yellow' },
	{ rank: '7 kyu', color: 'white' },

	{ rank: '2 kyu', color: 'purple' },
	{ rank: '4 kyu', color: 'blue' },
	{ rank: '6 kyu', color: 'yellow' },
	{ rank: '8 kyu', color: 'white' },

	{ rank: String.fromCodePoint('0x1F92F'), color: 'purple', height: '2em', fontSize: '1.4em' },
	{ rank: String.fromCodePoint('0x1F928'), color: 'blue', height: '2em', fontSize: '1.4em' },
	{ rank: String.fromCodePoint('0x1F610'), color: 'yellow', height: '2em', fontSize: '1.4em' },
	{ rank: String.fromCodePoint('0x1F642'), color: 'white', height: '2em', fontSize: '1.4em' },
];

export function AboutModal({ open, onClose, widgetIcon }) {
	const codewarsLink = <a href='https://www.codewars.com/dashboard' target='_blank' rel='noopener noreferrer' className='hyperlink' children='Codewars' /> // prettier-ignore

	return (
		<WidgetModal open={open} onClose={onClose}>
			<StyledAboutModal>
				{widgetIcon}
				<h1 className='header'>Codewars Dashboard</h1>
				<h2 className='subheader'>
					{codewarsLink} is a platform where developers can improve their coding prowess by solving
					challenges at various difficulty levels.
				</h2>
				<div className='badges-wrapper'>
					{badgesRef.map(badge => (
						<DifficultyBadge
							key={uuidv4()}
							rank={badge.rank}
							color={badge.color}
							height={badge.height}
							fontSize={badge.fontSize}
						/>
					))}
				</div>
			</StyledAboutModal>
		</WidgetModal>
	);
}

const StyledAboutModal = styled.div`
	font-size: clamp(15px, 3.5vw, 19px);

	display: grid;
	grid-template-rows: repeat(3, auto);
	grid-row-gap: 1em;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 15rem;

	.header {
		margin-top: 1.5rem;
		font-size: 1.2em;
	}

	.subheader {
		font-size: 0.8em;
		max-width: 45rem;
	}

	.badges-wrapper {
		display: grid;
		grid-template-columns: repeat(4, auto);
		grid-template-rows: repeat(3, auto);
		grid-row-gap: 0.5em;
		justify-items: center;
		width: 100%;
		margin: auto 0;
	}
`;
