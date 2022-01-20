import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import UtilityModal from 'components/shared/UtilityModal';
import AddTask from './AddTask';
import TaskList from './TaskList';

import { StyledTodo } from './Todo.Styled';

import { MdOutlineChecklistRtl as TodoIcon } from 'react-icons/md';
import { MdPlaylistAdd as AddElementIcon } from 'react-icons/md';

function Todo() {
	const [showModal, setShowModal] = useState(false);
	const [showUtilityModal, setShowUtilityModal] = useState(false);
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

	const handleModalAddTask = () => {
		setShowModal(!showModal);
		setShowUtilityModal(!showUtilityModal);
	};

	const messageTasksCompleted = <h1 className='user-message'>All Tasks Completed</h1>;

	return (
		<Card>
			<CardHeader
				name='Todo Tracker'
				icon={<TodoIcon />}
				widgetRef='todo'
				setShowModal={setShowModal}
				utilityModal={
					<AddElementIcon
						title='Add New Task'
						className='action-icons'
						aria-label='Open Widget Modal'
						onClick={() => setShowUtilityModal(!showUtilityModal)}
					/>
				}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<TodoIcon />
				<h1 className='modal-title'>Todo Tracker</h1>
				<h2 className='modal-description'>
					Take control and organize your day-to-day tasks with this efficient Task Tracker.
				</h2>
				<p className='modal-usage'>
					To add a task, select the {<AddElementIcon onClick={handleModalAddTask} />} icon.
					<br />
					Only a Task Name is required.
				</p>
			</Modal>
			<UtilityModal showUtilityModal={showUtilityModal} setShowUtilityModal={setShowUtilityModal}>
				<AddTask onAdd={addTask} />
			</UtilityModal>
			<StyledTodo>
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
