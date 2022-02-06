import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetModal from 'components/widgets/WidgetModal';

import TaskList from './TaskList';
import { About, Utility } from './TaskTrackerModal';

import { StyledTaskTracker } from './TaskTracker.Styled';
import { MdOutlineChecklistRtl as TaskIcon, MdPlaylistAdd as AddTaskIcon } from 'react-icons/md';
import { HiCursorClick as ClickIcon } from 'react-icons/hi';

function TaskTracker() {
	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isUtilityModal, setIsUtilityModal] = useState(false);
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

	const handleAboutToggle = () => setIsAboutModal(!isAboutModal);
	const handleUtilityToggle = () => setIsUtilityModal(!isUtilityModal);
	const handleModalSwitch = () => [handleAboutToggle(), handleUtilityToggle()];

	// ADD TASK
	const handleAddTask = newTask => {
		const addNewTask = { ...newTask, id: uuidv4() };
		setTasks([...tasks, addNewTask]);
	};

	// DELETE TASK
	const handleDeleteTask = id => {
		const filteredTasks = tasks.filter(task => task.id !== id);
		setTasks(filteredTasks);
	};

	// SET TASK REMINDER
	const handleReminder = id => {
		const updatedTasks = tasks.map(task => {
			if (task.id !== id) return task;
			return { ...task, reminder: !task.reminder };
		});

		setTasks(updatedTasks);
	};

	const taskList = <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleReminder} />;
	const emptyList = <h1 className='user-message'>All Tasks Completed</h1>;

	return (
		<Card>
			<CardHeader
				name='Task Tracker'
				icon={<TaskIcon />}
				widgetRef='task'
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<AddTaskIcon className='action-icons' onClick={handleUtilityToggle} />}
			/>

			<StyledTaskTracker>{tasks.length > 0 ? taskList : emptyList}</StyledTaskTracker>

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<TaskIcon className='widget-icon' />}
						addTaskIcon={<AddTaskIcon className='icon' onClick={handleModalSwitch} />}
						clickIcon={<ClickIcon className='icon' onClick={handleAboutToggle} />}
					/>
				}
			/>

			<WidgetModal
				open={isUtilityModal}
				onClose={handleUtilityToggle}
				element={
					<Utility
						widgetIcon={<TaskIcon className='widget-icon' />}
						addTaskIcon={<AddTaskIcon className='icon' />}
						onAddTask={handleAddTask}
					/>
				}
			/>
		</Card>
	);
}

export default TaskTracker;
