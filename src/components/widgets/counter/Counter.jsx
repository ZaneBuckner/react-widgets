import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import Button from 'components/shared/Button';
import { StyledCounter, CountDisplay } from './Counter.styled';

import CounterIcon from 'Assets/CounterIcon';
import { FiPlus as AddIcon, FiMinus as RemoveIcon } from 'react-icons/fi';

function Counter() {
	const [count, setCount] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);

	return (
		<Card>
			<CardHeader
				name='Counter'
				icon={<CounterIcon />}
				widgetRef='counter'
				setShowModal={setShowModal}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<h1>Hello There</h1>
			</Modal>
			<StyledCounter>
				<Button animate onClick={decrement}>
					<RemoveIcon />
				</Button>
				<CountDisplay>{count}</CountDisplay>
				<Button animate onClick={increment}>
					<AddIcon />
				</Button>
			</StyledCounter>
		</Card>
	);
}

export default Counter;
