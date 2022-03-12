import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import TaskList from './TaskList';
import { AboutModal, UtilityModal } from './TaskTrackerModal';

import { StyledTaskTracker } from './TaskTracker.Styled';
import { MdOutlineChecklistRtl as TaskIcon } from 'react-icons/md';
import { AddTaskIcon } from 'Assets/WidgetIcons';

const defaultTask = [
	{
		id: uuidv4(),
		important: true,
		title: 'Task Name',
		date: 'mmm dd | hh:mm',
	},
];

function TaskTracker() {
	const { currentUser, userData, onUserTaskAdd, onUserTaskDelete, onUserTaskUpdate } = useAuthContext(); // prettier-ignore
	const [tasks, setTasks] = useState([]);
	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isUtilityModal, setIsUtilityModal] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);
	const handleUtilityToggle = () => setIsUtilityModal(isUtilityModal => !isUtilityModal);
	const handleModalSwitch = () => [handleAboutToggle(), handleUtilityToggle()];

	const handleAddTask = addTask => {
		const newTask = { ...addTask, id: uuidv4() };
		currentUser ? onUserTaskAdd(newTask) : setTasks([...tasks, newTask]);
	};

	const handleDeleteTask = deleteTask => {
		const updatedTasks = tasks.filter(task => task.id !== deleteTask.id);
		currentUser ? onUserTaskDelete(deleteTask) : setTasks(updatedTasks);
	};

	const handleImportanceToggle = editTask => {
		const updatedTasks = tasks.map(task => {
			if (task.id !== editTask.id) return task;
			return { ...task, important: !task.important };
		});
		currentUser ? onUserTaskUpdate(updatedTasks) : setTasks(updatedTasks);
	};

	// SET AUTH USER'S TASKS => ON MOUNT & WHEN DATA UPDATES
	useEffect(() => userData && setTasks(userData?.tasks || defaultTask), [userData]);

	// SET NON-AUTH USER'S TASKS => WHEN USER STATE CHANGES
	useEffect(() => !currentUser && setTasks(defaultTask), [currentUser]);

	return (
		<Card>
			<CardHeader
				name='Task Tracker'
				icon={<TaskIcon />}
				widgetRef='task'
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<AddTaskIcon onClick={handleUtilityToggle} />}
			/>

			<StyledTaskTracker>
				{tasks.length > 0 ? (
					<TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleImportanceToggle} />
				) : (
					<h1 className='user-message'>All Tasks Completed</h1>
				)}
			</StyledTaskTracker>

			<AboutModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				onModalSwitch={handleModalSwitch}
				widgetIcon={<TaskIcon className='widget-icon' />}
			/>

			<UtilityModal
				open={isUtilityModal}
				onClose={handleUtilityToggle}
				tasks={tasks}
				onAddTask={handleAddTask}
				widgetIcon={<TaskIcon className='widget-icon' />}
			/>
		</Card>
	);
}

export default TaskTracker;
