import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import AddTask from './AddTask';
import TaskList from './TaskList';

import { StyledTodo } from './Todo.Styled';

import { MdOutlineChecklistRtl as TodoIcon } from 'react-icons/md';

function Todo() {
	const [tasks, setTasks] = useState([
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
	]);

	const addTask = newTask => {
		const addNewTask = { ...newTask, id: uuidv4() };
		setTasks([...tasks, addNewTask]);
		console.log(tasks);
	};

	const deleteTask = id => {
		const filteredTasks = tasks.filter(task => task.id !== id);
		setTasks(filteredTasks);
	};

	const toggleReminder = id => {
		const updatedTasks = tasks.map(task => {
			if (task.id !== id) return task;
			return { ...task, reminder: !task.reminder };
		});

		setTasks(updatedTasks);
	};

	const messageTasksCompleted = <h1 className='user-message'>All Tasks Completed</h1>;

	return (
		<Card>
			<CardHeader name='Todo Tracker' icon={<TodoIcon />} widgetRef='todo' />
			<StyledTodo>
				<AddTask onAdd={addTask} />
				{tasks.length > 0 ? (
					<TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
				) : (
					messageTasksCompleted
				)}
			</StyledTodo>
		</Card>
	);
}

export default Todo;
