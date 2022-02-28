import { StyledTask } from './TaskTracker.Styled';

import { RiDeleteBinLine as DeleteIcon } from 'react-icons/ri';

function Task({ task, onDelete, onToggle }) {
	return (
		<StyledTask isReminder={task.reminder} onDoubleClick={() => onToggle(task.id)}>
			<div className='info-wrapper'>
				<h1 className='title'>{task.title}</h1>
				<h2 className='date'>{task.date}</h2>
			</div>
			<div className='actions-wrapper'>
				<DeleteIcon onClick={() => onDelete(task.id)} />
			</div>
		</StyledTask>
	);
}

export default Task;
