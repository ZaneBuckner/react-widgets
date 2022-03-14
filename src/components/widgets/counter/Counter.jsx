import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import { AboutModal } from './CounterModal';

import Button from 'components/shared/Button';
import { StyledCounter, CountDisplay } from './Counter.styled';

import CounterIcon from 'Assets/CounterIcon';
import { BiReset as ResetIcon } from 'react-icons/bi';
import { FiPlus as AddIcon, FiMinus as RemoveIcon } from 'react-icons/fi';

function Counter() {
	const { currentUser, userData, onDocumentUpdate, onUserCountUpdate } = useAuthContext();
	const [isAboutModal, setIsAboutModal] = useState(false);
	const [count, setCount] = useState(0);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);

	const decrement = () => (currentUser ? onUserCountUpdate(-1) : setCount(count => count - 1));
	const increment = () => (currentUser ? onUserCountUpdate(1) : setCount(count => count + 1));
	const handleCountReset = () => {
		if (!currentUser) return setCount(0);
		if (!window.confirm('Reset counter to zero ?')) return;
		onDocumentUpdate({ counter: 0 });
	};

	// SET INITIAL COUNT VALUE => IF USER IS SIGNED IN
	useEffect(() => currentUser && setCount(userData?.counter || 0), [currentUser, userData]);

	return (
		<Card>
			<CardHeader
				name='Counter'
				icon={<CounterIcon />}
				widgetRef='counter'
				onAboutToggle={handleAboutToggle}
			/>

			<StyledCounter>
				<div className='count-display'>
					<Button animate size='small' icon={<RemoveIcon />} onClick={decrement} />
					<CountDisplay>{count}</CountDisplay>
					<Button animate size='small' icon={<AddIcon />} onClick={increment} />
				</div>
				<Button
					animate
					size='large'
					variant='combo'
					icon={<ResetIcon />}
					children='Reset Count'
					onClick={handleCountReset}
					className='count-reset'
				/>
			</StyledCounter>

			<AboutModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				widgetIcon={<CounterIcon height='1.5rem' fill='#DAB55D' />}
			/>
		</Card>
	);
}

export default Counter;
