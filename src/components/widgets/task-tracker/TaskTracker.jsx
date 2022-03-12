import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetModal from 'components/widgets/WidgetModal';

import TaskList from './TaskList';
import { About, Utility } from './TaskTrackerModal';

import { StyledTaskTracker } from './TaskTracker.Styled';
import { MdOutlineChecklistRtl as TaskIcon } from 'react-icons/md';
import { HiCursorClick as ClickIcon } from 'react-icons/hi';
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
		const updatedTasks = tasks.filter(task => task.id !== [deleteTask.id]);
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

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<TaskIcon className='widget-icon' />}
						addTaskIcon={
							<AddTaskIcon
								removeBG
								width='1rem'
								height='1rem'
								color='#DAB55D'
								style={{ cursor: 'pointer' }}
								onClick={handleModalSwitch}
							/>
						}
						clickIcon={<ClickIcon className='icon' onClick={handleAboutToggle} />}
					/>
				}
			/>

			<WidgetModal
				open={isUtilityModal}
				onClose={handleUtilityToggle}
				element={
					<Utility
						tasks={tasks}
						widgetIcon={<TaskIcon className='widget-icon' />}
						addTaskIcon={<AddTaskIcon />}
						onAddTask={handleAddTask}
					/>
				}
			/>
		</Card>
	);
}

export default TaskTracker;
