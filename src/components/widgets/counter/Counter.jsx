import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetModal from '../WidgetModal';
import { About } from './CounterModal';

import Button from 'components/shared/Button';
import { StyledCounter, CountDisplay } from './Counter.styled';

import CounterIcon from 'Assets/CounterIcon';
import { FiPlus as AddIcon, FiMinus as RemoveIcon } from 'react-icons/fi';
import confusedTravoltaGif from 'Assets/Images/confusedTravoltaGif.gif';

function Counter() {
	const [count, setCount] = useState(0);
	const [isAboutModal, setIsAboutModal] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(!isAboutModal);

	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);

	return (
		<Card>
			<CardHeader
				name='Counter'
				icon={<CounterIcon />}
				widgetRef='counter'
				onAboutToggle={handleAboutToggle}
			/>

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<CounterIcon className='widget-icon' height={'1.5rem'} fill={'#DAB55D'} />}
						gif={<img src={confusedTravoltaGif} alt='Confused Travolta Gif' />}
					/>
				}
			/>

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
