import styled from 'styled-components';

export const StyledCodewarsModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	.kyu-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 1.5rem;
		grid-row-gap: 1.5rem;
	}

	.key-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;

		h1 {
			font-size: 0.8rem;
			font-weight: 400;
			text-transform: uppercase;
		}

		div {
			width: 1rem;
			height: 1rem;
			margin: auto;

			border-radius: 50%;
		}

		.hardest {
			background-color: #866cc7;
		}

		.hard {
			background-color: #3c7ebb;
		}

		.medium {
			background-color: #ecb613;
		}

		.easy {
			background-color: #e6e6e6;
		}
	}
`;

export const StyledDashboard = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: auto;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.user-message {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;

		border: 1px solid #c3c3c380;
		border-radius: 5px;
		text-align: center;

		font-size: 0.8rem;

		span {
			margin: 0 0.2rem;

			display: inline-block;
			font-weight: 600;
			color: #dab55d;
		}
	}
`;

export const StyledUserProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;

	.user-header {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		margin: 0.5rem 0;

		h1 {
			font-size: 1.2rem;
			font-weight: 400;
		}

		div {
			margin-left: auto;
		}
	}

	.item {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		width: 100%;

		h2 {
			font-size: 0.9rem;
			opacity: 70%;
		}

		p {
			font-size: 1rem;
			font-weight: 400;
		}
	}
`;

export const StyledChallengesList = styled.ul`
	display: flex;
	flex-direction: column;
	max-height: 10rem;
	overflow: scroll;
	width: 30%;

	li {
		font-size: 0.8rem;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		user-select: none;

		&:hover {
			cursor: pointer;
			color: #b03226;
		}
	}
`;

export const StyledChallengeDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 30%;
	height: 100%;

	h1 {
		margin-bottom: 0.5rem;

		font-size: 1.1rem;
		font-weight: 400;
		text-align: center;
		line-height: 1.2rem;
	}

	.item {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;

		h2 {
			font-size: 0.9rem;
			opacity: 70%;
		}

		p {
			font-size: 1rem;
			font-weight: 400;
			color: 100%;
		}
	}
`;
