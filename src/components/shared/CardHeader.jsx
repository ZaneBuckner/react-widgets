import { useContext } from 'react';
import { WidgetContext } from 'context/WidgetContext';
import styled from 'styled-components';

import InfoIcon from '@material-ui/icons/Info';
import CancelIcon from '@material-ui/icons/Cancel';

const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 1.3rem;
	margin-bottom: 0.5rem;

	font-family: 'Roboto', serif;
	opacity: 70%;

	svg {
		width: auto;
		height: 100%;
		fill: #dab55d;
	}

	h1 {
		margin-left: 0.5rem;
		font-size: 0.8rem;
		font-weight: 400;
		color: #dab55d;
	}

	input {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.5rem;
		margin-left: auto;
		width: 40%;

		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 5px;

		font-family: 'Roboto', serif;
		color: #c3c3c3;

		::placeholder {
			font: inherit;
			color: #c3c3c3;
			opacity: 80%;
		}
	}

	.header-icons {
		height: 100%;
		margin-left: 0.3rem;
		cursor: pointer;
	}

	.info {
		margin-left: auto;
	}
`;

function CardHeader({ name, icon, placeholder, widgetRef, setUserInput, setShowModal }) {
	const { toggleDisplay } = useContext(WidgetContext);
	const userInput = e => e.key === 'Enter' && setUserInput(e.target.value);

	return (
		<StyledCardHeader>
			{icon}
			<h1>{name}</h1>
			{setUserInput && (
				<input type='text' placeholder={placeholder} spellCheck='false' onKeyPress={userInput} />
			)}
			{setShowModal && (
				<InfoIcon
					className='header-icons info'
					aria-label='Open Widget Modal'
					onClick={() => setShowModal(prev => !prev)}
				/>
			)}
			<CancelIcon
				className='header-icons close'
				aria-label='Close Widget'
				onClick={() => toggleDisplay(widgetRef)}
			/>
		</StyledCardHeader>
	);
}

export default CardHeader;
