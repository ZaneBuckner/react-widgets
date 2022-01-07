import { v4 as uuidv4 } from 'uuid';

import { StyledCodewarsModal } from './Codewars.styled';
import DifficultyBadge from './DifficultyBadge';

function CodewarsModal() {
	const kyuBadges = () => {
		const levels = [
			{ color: 'purple', name: '1 kyu' },
			{ color: 'purple', name: '2 kyu' },
			{ color: 'blue', name: '3 kyu' },
			{ color: 'blue', name: '4 kyu' },
			{ color: 'yellow', name: '5 kyu' },
			{ color: 'yellow', name: '6 kyu' },
			{ color: 'white', name: '7 kyu' },
			{ color: 'white', name: '8 kyu' },
		];

		return levels.map(level => (
			<DifficultyBadge key={uuidv4()} rankColor={level.color} rankName={level.name} />
		));
	};

	return (
		<StyledCodewarsModal>
			<div className='kyu-wrapper'>{kyuBadges()}</div>
			<div className='key-wrapper'>
				<div className='hardest'></div>
				<h1>Hardest</h1>
				<div className='hard'></div>
				<h1>Hard</h1>
				<div className='medium'></div>
				<h1>Medium</h1>
				<div className='easy'></div>
				<h1>Easy</h1>
			</div>
		</StyledCodewarsModal>
	);
}

export default CodewarsModal;
