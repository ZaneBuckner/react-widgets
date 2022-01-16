import styled from 'styled-components';

export const StyledTodo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;

	font-family: 'Roboto', serif;
	color: #c3c3c3;
`;

export const StyledTodoTasks = styled.div`
	width: 100%;

	.task-item {
	}
`;

export const StyledTask = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin: 1rem 0;
	padding: 0.5rem;

	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.1);

	.info-wrapper {
		display: flex;
		flex-direction: column;

		line-height: 1.1rem;

		.title {
			font-size: 1rem;
			font-weight: 400;
		}

		.date {
			font-size: 0.8rem;
			font-weight: 400;
		}
	}

	svg {
		margin-left: auto;
		cursor: pointer;
	}
`;

export const StyledInput = styled.input`
	display: flex;
	align-items: center;
	height: 1.5rem;
	padding: 0.2rem 0.5rem;

	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 5px;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	::placeholder {
		font: inherit;
		color: #c3c3c3;
		opacity: 80%;
	}
`;
