import Task from './Task';

import { StyledTaskList } from './TaskTracker.Styled';

function TaskList({ tasks, onDelete, onToggle }) {
	return (
		<StyledTaskList>
			{tasks.map(task => (
				<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
			))}
		</StyledTaskList>
	);
}

export default TaskList;
