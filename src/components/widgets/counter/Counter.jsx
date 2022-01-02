import { useState } from 'react';

import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { StyledCounter, CountDisplay } from './Counter.styled';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Counter() {
	const [count, setCount] = useState(0);

	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);

	return (
		<Card>
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
