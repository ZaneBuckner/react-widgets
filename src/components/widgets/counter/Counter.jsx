import { useState } from 'react';
import Card from '../../shared/Card';
import { StyledCounter } from './Counter.styled';
import { StyledButton } from '../../shared/CustomButton';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Counter() {
	const [count, setCount] = useState(0);

	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);

	return (
		<Card>
			<StyledCounter>
				<StyledButton onClick={decrement}>
					<RemoveIcon />
				</StyledButton>
				<h1>{count}</h1>
				<StyledButton onClick={increment}>
					<AddIcon />
				</StyledButton>
			</StyledCounter>
		</Card>
	);
}

export default Counter;
