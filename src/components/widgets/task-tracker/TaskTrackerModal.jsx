import styled from 'styled-components';

import AddTask from './AddTask';

export function About({ widgetIcon, addTaskIcon }) {
	return (
		<>
			{widgetIcon}
			<h1 className='header'>Task Tracker</h1>
			<h2 className='subheader'>Efficient Task Manager</h2>
			<div className='body'>
				<p>Select {addTaskIcon} to add new tasks.</p>
			</div>
		</>
	);
}

export function Utility({ onAddTask }) {
	return <AddTask onAddTask={onAddTask} />;
}
