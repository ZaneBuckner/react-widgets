import { v4 as uuidv4 } from 'uuid';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import TaskList from './TaskList';

import { StyledTodo } from './Todo.Styled';

import { MdOutlineChecklistRtl as TodoIcon } from 'react-icons/md';

const tasks = [
	{
		id: uuidv4(),
		title: 'Task 1',
		date: 'MMM DDth @ 9:30am',
		reminder: false,
	},
	{
		id: uuidv4(),
		title: 'Task 2',
		date: 'MMM DDth @ 4:20pm',
		reminder: false,
	},
	{
		id: uuidv4(),
		title: 'Task 3',
		date: 'MMM DDth @ 1:30pm',
		reminder: false,
	},
];

function Todo() {
	return (
		<Card>
			<CardHeader name='Todo Tracker' icon={<TodoIcon />} widgetRef='todo' />
			<StyledTodo>
				<TaskList tasks={tasks} />
			</StyledTodo>
		</Card>
	);
}

export default Todo;
