import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFormattedDate, getFormattedTime } from 'utils/util';

import Button from 'components/shared/Button';
import UserAlert from 'components/shared/UserAlerts';
import { StyledInput, StyledCheckbox } from './TaskTracker.Styled';
import { BsCheck as CheckmarkIcon } from 'react-icons/bs';

export default function AddTask({ tasks, onAddTask, onClose }) {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [important, setImportant] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const toggleImportance = () => setImportant(important => !important);
	const resetValues = () => [setTitle(''), setImportant(false), setErrorMessage('')];

	const handleSubmit = e => {
		e.preventDefault();
		if (tasks.length === 10) return setErrorMessage('Ambitious! Max limit reached!');
		if (!title) return setErrorMessage('Please provide a name');
		onAddTask({ title, date, important });
		resetValues();
		onClose();
	};

	// SET DATE AS CURRENT DATE => ON WIDGET MOUNT
	useEffect(() => {
		const { day, month } = getFormattedDate();
		const { hours, minutes, meridian } = getFormattedTime();
		setDate(`${day} ${month} | ${hours}:${minutes} ${meridian}`);
	}, []);

	return (
		<StyledAddTask>
			{errorMessage && <UserAlert variant='error' message={errorMessage} />}
			<form onSubmit={handleSubmit}>
				<StyledInput
					type='text'
					className='form-input'
					placeholder='Task Name'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<StyledInput
					type='text'
					className='form-input'
					placeholder='Set Date & Time'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<div className='form-checkbox-wrapper'>
					<label>Mark as important:</label>
					<div className='checkbox-wrapper'>
						<StyledCheckbox type='checkbox' value={important} onChange={toggleImportance} />
						{important && <CheckmarkIcon onClick={toggleImportance} />}
					</div>
				</div>
				<Button animate type='submit' size='large' text='Save Task' />
			</form>
		</StyledAddTask>
	);
}

const StyledAddTask = styled.div`
	grid-area: 1 / 1 / 5 / 2;
	width: 100%;

	form {
		width: 100%;
		height: 100%;
		margin: auto 0;

		.form-input {
			width: 100%;
			height: 3rem;
			margin: 1rem 0;
			font-size: 1rem;
		}

		.form-checkbox-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0 0.5rem;
			margin-bottom: 2rem;

			font-size: 0.9rem;

			.checkbox-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;

				svg {
					position: absolute;
					font-size: 1.5rem;
					color: #363636;
					cursor: pointer;
				}
			}
		}
	}
`;
