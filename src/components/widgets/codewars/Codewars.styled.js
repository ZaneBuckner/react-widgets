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

export const StyledCodewars = styled.div`
	display: grid;
	grid-template-columns: 2fr 3fr 2fr;
	grid-column-gap: 0.5rem;

	width: 100%;
	height: 100%;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.user-message {
		width: 100%;
		padding: 0.2rem;

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

export const StyledUserProfile = styled.div`
	height: 100%;

	.user-header {
		display: flex;
		align-items: center;
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
		flex-wrap: wrap;
		width: 100%;

		h2 {
			font-size: 0.9rem;
			font-weight: 300;
		}

		p {
			font-size: 0.9rem;
			font-weight: 400;
		}
	}

	@media (max-width: 600px) {
		.user-header {
			flex-direction: column;
			align-items: center;

			div {
				margin-left: 0;
			}
		}

		.item {
			flex-direction: column;
			align-items: center;
		}
	}
`;

export const StyledChallengesList = styled.div`
	height: 100%;

	overflow: hidden;

	/* REMOVE SCROLL BAR DEFAULT STYLING */
	::-webkit-scrollbar {
		display: none;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	ul {
		height: 13rem;
		overflow-y: scroll;

		li {
			font-size: 0.8rem;
			font-weight: 400;
			white-space: nowrap;
			user-select: none;

			&:hover {
				cursor: pointer;
				color: #dab55d;
			}
		}
	}
`;

export const StyledChallengeDetails = styled.div`
	height: 100%;

	.user-message {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.details-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0.5rem 0;

		h1 {
			margin-bottom: 0.5rem;

			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			line-height: 1.2rem;

			&:hover {
				cursor: pointer;
				color: #dab55d;
			}
		}
	}

	.item {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		width: 100%;

		h2 {
			font-size: 0.9rem;
			font-weight: 300;
		}

		p {
			font-size: 0.9rem;
			font-weight: 400;
		}
	}

	@media (max-width: 600px) {
		.item {
			flex-direction: column;
			align-items: center;
		}
	}
`;
