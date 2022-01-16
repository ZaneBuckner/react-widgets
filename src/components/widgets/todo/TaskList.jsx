import Task from './Task';

import { StyledTodoTasks } from './Todo.Styled';

function TodoTasks({ tasks }) {
	return (
		<StyledTodoTasks>
			{tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</StyledTodoTasks>
	);
}

export default TodoTasks;
