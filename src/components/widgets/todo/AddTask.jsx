import { useState } from 'react';

import Button from 'components/shared/Button';
import { StyledAddTask, StyledInput, StyledCheckbox } from './Todo.Styled';

import { BsCheck as CheckmarkIcon } from 'react-icons/bs';

function AddTask({ onAdd }) {
	const [textInput, setTextInput] = useState('');
	const [dateInput, setDateInput] = useState('');
	const [reminder, setReminder] = useState(false);

	const toggleReminder = () => setReminder(!reminder);

	return (
		<StyledAddTask>
			<form>
				<StyledInput
					type='text'
					className='form-input'
					placeholder='Add Task'
					value={textInput}
					onChange={e => setTextInput(e.target.value)}
				/>
				<StyledInput
					type='text'
					className='form-input'
					placeholder='Set Date & Time'
					value={dateInput}
					onChange={e => setDateInput(e.target.value)}
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
