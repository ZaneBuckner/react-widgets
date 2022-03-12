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
	display: grid;
	grid-template-rows: auto;
	grid-row-gap: 1rem;
	width: 100%;
	height: 100%;

	overflow-y: scroll;
`;

export const StyledTask = styled.div`
	display: grid;
	grid-template-columns: 8fr auto;
	grid-template-rows: repeat(2, auto);
	width: 100%;
	padding: 0.5rem 0 0.5rem 0.5rem;

	border-left: ${({ isImportant }) => (isImportant ? '6px solid #dab55d' : '0px solid')};
	border-radius: 5px;
	background-color: rgb(65 65 65);
	transition: 150ms cubic-bezier(0.4, 0, 0.4, 1.8);

	.title,
	.date-wrapper {
		overflow-x: auto;
		white-space: nowrap;
		padding-right: 2rem;

		/* TRANSPARENT TEXT FADES RIGHT WHEN SCROLL */
		-webkit-mask-image: linear-gradient(to right, black 80%, transparent 95%);
		mask-image: linear-gradient(to right, black 80%, transparent 95%);
	}

	.title {
		grid-area: 1 / 1 / 2 / 2;
		width: 100%;
		height: 1.6rem;

		font-size: 1rem;
		font-weight: 400;
		user-select: none;
	}

	.date-wrapper {
		grid-area: 2 / 1 / 3 / 2;
		display: grid;
		grid-template-columns: auto 10fr;
		grid-column-gap: 0.5rem;
		align-items: center;

		svg {
			width: 1.1rem;
			height: 1.1rem;
			fill: #c3c3c3;
		}

		p {
			font-weight: 300;
			white-space: nowrap;
			user-select: none;
		}
	}

	.options-wrapper {
		grid-area: 1 / 2 / 3 / 3;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;

		svg {
			font-size: 2rem;
			cursor: pointer;
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
