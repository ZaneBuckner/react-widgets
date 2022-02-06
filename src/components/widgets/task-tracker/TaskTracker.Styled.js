import styled from 'styled-components';

export const StyledTaskTracker = styled.div`
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

export const StyledTaskList = styled.div`
	width: 100%;
	height: 100%;

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

			@media only screen and (max-width: 500px) {
				font-size: 1.8rem;
			}
		}
	}
`;

export const StyledInput = styled.input`
	display: flex;
	align-items: center;
	height: 1.8rem;
	padding: 0.2rem 0.5rem;

	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 5px;
	overflow: wrap;

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

	@media only screen and (max-width: 500px) {
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
