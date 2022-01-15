import { useContext } from 'react';
import { WidgetContext } from 'context/WidgetContext';
import { motion, AnimatePresence } from 'framer-motion';
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

	.widget-title {
		margin-left: 0.5rem;
		font-size: 0.8rem;
		font-weight: 400;
		color: #dab55d;

		@media (max-width: 350px) {
			display: none;
		}
	}

	@media (max-width: 500px) {
		height: 1.8rem;
	}
`;

const StyledCardHeaderActions = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-left: auto;

	.action-input {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.5rem;
		margin-left: auto;
		max-width: 6.5rem;

		font-family: 'Roboto', serif;
		color: #c3c3c3;

		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 5px;

		::placeholder {
			font: inherit;
			color: #c3c3c3;
		}
	}

	.action-icons {
		cursor: pointer;
		height: 100%;
		margin-left: 0.2rem;
	}
`;

function CardHeader({ name, icon, placeholder, widgetRef, setUserInput, setShowModal }) {
	const { toggleDisplay } = useContext(WidgetContext);
	const userInput = e => e.key === 'Enter' && setUserInput(e.target.value);

	return (
		<StyledCardHeader>
			{icon}
			<h1 className='widget-title'>{name}</h1>
			<StyledCardHeaderActions>
				{/* OPTIONAL: GIVES WIDGET SEARCH INPUT */}
				{setUserInput && (
					<input
						className='action-input'
						type='text'
						placeholder={placeholder}
						spellCheck='false'
						onKeyPress={userInput}
					/>
				)}
				{/* OPTIONAL: GIVES WIDGET A POPUP MODAL */}
				{setShowModal && (
					<InfoIcon
						className='action-icons'
						aria-label='Open Widget Modal'
						onClick={() => setShowModal(prev => !prev)}
					/>
				)}
				{/* REQUIRED: CLOSES WIDGET */}
				<CancelIcon
					className='action-icons'
					aria-label='Close Widget'
					onClick={() => toggleDisplay(widgetRef)}
				/>
			</StyledCardHeaderActions>
		</StyledCardHeader>
	);
}

export default CardHeader;
