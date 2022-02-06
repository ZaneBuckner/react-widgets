import { useState } from 'react';
import { getFormatedDate } from 'utils/util';

import Button from 'components/shared/Button';
import UserAlert from 'components/shared/UserAlerts';
import { StyledAddTask, StyledInput, StyledCheckbox } from './TaskTracker.Styled';
import { BsCheck as CheckmarkIcon } from 'react-icons/bs';

function AddTask({ onAddTask }) {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState(getFormatedDate());
	const [reminder, setReminder] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!title) return setErrorMessage('Please provide a title.');
		onAddTask({ title, date, reminder });
		setTitle('');
		setReminder(false);
		setErrorMessage('');
	};

	const toggleReminder = () => setReminder(!reminder);

	return (
		<StyledAddTask>
			{errorMessage && <UserAlert variant='error' message={errorMessage} />}
			<form onSubmit={handleSubmit}>
				<StyledInput
					type='text'
					className='form-input'
					placeholder='Add Task'
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
					<label>Set Reminder</label>
					<div className='checkbox-wrapper'>
						<StyledCheckbox type='checkbox' value={reminder} onChange={toggleReminder} />
						{reminder && <CheckmarkIcon onClick={toggleReminder} />}
					</div>
				</div>
				<Button animate type='submit' children='Save Task' />
			</form>
		</StyledAddTask>
	);
}

export default AddTask;
