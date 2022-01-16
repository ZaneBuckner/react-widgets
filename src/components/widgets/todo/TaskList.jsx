import Task from './Task';

import { StyledTaskList } from './Todo.Styled';

function TodoTasks({ tasks, onDelete, onToggle }) {
	return (
		<StyledTaskList>
			{tasks.map(task => (
				<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
			))}
		</StyledTaskList>
	);
}

export default TodoTasks;
