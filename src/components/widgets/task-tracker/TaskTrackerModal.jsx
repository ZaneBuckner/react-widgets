import styled from 'styled-components';

import AddTask from './AddTask';

const StyledAddTask = styled.div`
	grid-area: 1 / 1 / 5 / 2;
	width: 100%;

	form {
		width: 100%;
		height: 100%;
		margin: auto 0;

		.form-input {
			width: 100%;
			height: 3rem;
			margin: 1rem 0;
			font-size: 1rem;
		}

		.form-checkbox-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0 0.5rem;
			margin-bottom: 2rem;

			font-size: 0.9rem;

			.checkbox-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;

				svg {
					position: absolute;
					font-size: 1.5rem;
					color: #363636;
					cursor: pointer;
				}
			}
		}
	}
`;

export function About({ widgetIcon, addTaskIcon, clickIcon }) {
	return (
		<>
			{widgetIcon}
			<h1 className='header'>Task Tracker</h1>
			<h2 className='subheader'>Efficient Task Manager</h2>
			<div className='body'>
				<p>Select {addTaskIcon} to add new tasks.</p>
				<p>Double {clickIcon} to toggle importance.</p>
			</div>
		</>
	);
}

export function Utility({ widgetIcon, onAddTask, tasks }) {
	return (
		<StyledAddTask>
			{widgetIcon}
			<AddTask onAddTask={onAddTask} tasks={tasks} />
		</StyledAddTask>
	);
}
