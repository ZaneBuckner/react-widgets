import styled from 'styled-components';

export const StyledTodo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 20rem;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.user-message {
		width: 100%;
		padding: 0.2rem;
		margin-top: 1rem;

		border: 1px solid #c3c3c380;
		border-radius: 5px;
		text-align: center;

		font-size: 0.8rem;

		span {
			font-weight: 600;
			color: #dab55d;
		}
	}
`;

export const StyledAddTask = styled.div`
	form {
		.form-input {
			margin: 0.5rem 0;
			width: 100%;
		}

		.form-checkbox-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0 0.5rem;

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

		button {
			width: 100%;
			height: 1.8rem;
			margin-top: 1rem;
			border-radius: 5px;

			font-size: 0.8rem;
			text-transform: uppercase;
		}
	}
`;

export const StyledTaskList = styled.div`
	width: 100%;
	height: 13rem;
	margin-top: 1rem;

	overflow-y: scroll;
`;

export const StyledTask = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin: 1rem 0;
	padding: 0.5rem;

	border-left: ${({ isReminder }) => isReminder && '5px solid #dab55d;'};
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.1);

	cursor: pointer;

	.info-wrapper {
		display: flex;
		flex-direction: column;

		line-height: 1.1rem;
		user-select: none;

		.title {
			font-size: 1rem;
			font-weight: 400;
		}

		.date {
			font-size: 0.8rem;
			font-weight: 400;
		}
	}

	.actions-wrapper {
		display: flex;
		margin-left: auto;

		svg {
			height: 100%;
			margin-left: 0.8rem;
			cursor: pointer;

			@media (max-width: 500px) {
				font-size: 1.8rem;
			}
		}
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
		color: #c3c3c3;
		opacity: 50%;
		font-size: 0.9rem;
	}

	svg {
		color: #c3c3c3;
	}

	@media (max-width: 500px) {
		height: 1.8rem;
	}
`;

export const StyledCheckbox = styled.input`
	width: 1.2rem;
	height: 1.2rem;
	border: 1px solid #c3c3c3;
	border-radius: 3px;
	cursor: pointer;

	${({ value }) =>
		value &&
		`
    background-color: #dab55d;
    border: transparent;
  `}
`;
