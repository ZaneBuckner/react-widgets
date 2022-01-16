import { StyledTask } from './Todo.Styled';

import { RiDeleteBinLine as DeleteIcon } from 'react-icons/ri';

function Task({ task }) {
	return (
		<StyledTask>
			<div className='info-wrapper'>
				<h1 className='title'>{task.title}</h1>
				<h2 className='date'>{task.date}</h2>
			</div>
			<DeleteIcon />
		</StyledTask>
	);
}

export default Task;
