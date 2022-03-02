import { useState, useEffect } from 'react';
import { getFormattedDate, getFormattedTime } from 'utils/util';

import Button from 'components/shared/Button';
import UserAlert from 'components/shared/UserAlerts';
import { StyledInput, StyledCheckbox } from './TaskTracker.Styled';
import { BsCheck as CheckmarkIcon } from 'react-icons/bs';

function AddTask({ tasks, onAddTask }) {
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
	};

	// SET DATE AS CURRENT DATE => ON WIDGET MOUNT
	useEffect(() => {
		const { day, month } = getFormattedDate();
		const { hours, minutes, meridian } = getFormattedTime();
		setDate(`${day} ${month} | ${hours}:${minutes} ${meridian}`);
	}, []);

	return (
		<>
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
		</>
	);
}

export default AddTask;
