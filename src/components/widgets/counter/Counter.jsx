import { useState } from 'react';

import Card from '../../shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import Button from '../../shared/Button';
import { StyledCounter, CountDisplay } from './Counter.styled';

import CounterIcon from '../../../Assets/CounterIcon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
				<Button onClick={decrement}>
					<RemoveIcon />
				</Button>
				<CountDisplay>{count}</CountDisplay>
				<Button onClick={increment}>
					<AddIcon />
				</Button>
			</StyledCounter>
		</Card>
	);
}

export default Counter;
