import { useState } from 'react';
import { getFormatedDate } from 'utils/util';

import Button from 'components/shared/Button';
import { StyledAddTask, StyledInput, StyledCheckbox } from './TaskTracker.Styled';
import { BsCheck as CheckmarkIcon } from 'react-icons/bs';

function AddTask({ onAdd }) {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState(getFormatedDate());
	const [reminder, setReminder] = useState(false);

	const handleFormSubmit = e => {
		e.preventDefault();
		if (!title) return alert('Task Name Cannot Be Empty');

		onAdd({ title, date, reminder });
		setTitle('');
		setDate('');
		setReminder(false);
	};

	const toggleReminder = () => setReminder(!reminder);

	return (
		<StyledAddTask>
			<form onSubmit={handleFormSubmit}>
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
				<Button type='submit'>Save Task</Button>
			</form>
		</StyledAddTask>
	);
}

export default AddTask;
