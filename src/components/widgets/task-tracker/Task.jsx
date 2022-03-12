import { StyledTask } from './TaskTracker.Styled';

import { CgPlayListRemove as DeleteIcon } from 'react-icons/cg';
import { MdAccessTimeFilled as ClockIcon } from 'react-icons/md';

function Task({ task, onDelete, onToggle }) {
	const handleImportanceToggle = () => onToggle(task);
	const handleTaskDelete = () => onDelete(task);

	return (
		<StyledTask isImportant={task.important} onDoubleClick={handleImportanceToggle}>
			<h1 className='title'>{task.title}</h1>
			<div className='date-wrapper'>
				<ClockIcon />
				<p>{task.date}</p>
			</div>
			<div className='options-wrapper'>
				<DeleteIcon title='Delete Task' onClick={handleTaskDelete} />
			</div>
		</StyledTask>
	);
}

export default Task;
