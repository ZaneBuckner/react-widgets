import { useState, useEffect } from 'react';
import { getFormattedDate, getFormattedTime } from 'utils/util';

import Button from 'components/shared/Button';
import UserAlert from 'components/shared/UserAlerts';
import { StyledInput, StyledCheckbox } from './TaskTracker.Styled';
import { BsCheck as CheckmarkIcon } from 'react-icons/bs';

function AddTask({ onAddTask }) {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [reminder, setReminder] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const toggleReminder = () => setReminder(reminder => !reminder);
	const getDefaultDate = () => {
		const d = getFormattedDate();
		const t = getFormattedTime();
		const formattedDate = `${d.day} ${d.month} ${d.year}`;
		const formattedTime = `${t.hours}:${t.minutes} ${t.meridian}`;

		return `${formattedDate} @ ${formattedTime}`;
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!title) return setErrorMessage('Please provide a title.');
		onAddTask({ title, date, reminder });
		setTitle('');
		setReminder(false);
		setErrorMessage('');
	};

	useEffect(() => {
		setDate(getDefaultDate);
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
						<StyledCheckbox type='checkbox' value={reminder} onChange={toggleReminder} />
						{reminder && <CheckmarkIcon onClick={toggleReminder} />}
					</div>
				</div>
				<Button animate type='submit' children='Save Task' />
			</form>
		</>
	);
}

export default AddTask;
