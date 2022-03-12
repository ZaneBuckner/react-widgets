import WidgetModal from '../WidgetModal';
import AddTask from './AddTask';
import { HiCursorClick as ClickIcon } from 'react-icons/hi';
import { AddTaskIcon } from 'Assets/WidgetIcons';

export function AboutModal({ open, onClose, onModalSwitch, widgetIcon }) {
	const formattedAddTaskIcon = <AddTaskIcon removeBG width='1rem' height='1rem' color='#DAB55D' style={{ cursor: 'pointer' }} onClick={onModalSwitch} /> // prettier-ignore

	return (
		<WidgetModal open={open} onClose={onClose}>
			{widgetIcon}
			<h1 className='header'>Task Tracker</h1>
			<h2 className='subheader'>Efficient Task Manager</h2>
			<div className='body'>
				<p>Select {formattedAddTaskIcon} to add new tasks.</p>
				<p>
					Double <ClickIcon className='icon' onClick={onClose} /> to toggle importance.
				</p>
			</div>
		</WidgetModal>
	);
}

export function UtilityModal({ open, onClose, tasks, onAddTask, widgetIcon }) {
	return (
		<WidgetModal open={open} onClose={onClose}>
			{widgetIcon}
			<AddTask tasks={tasks} onAddTask={onAddTask} onClose={onClose} />
		</WidgetModal>
	);
}
