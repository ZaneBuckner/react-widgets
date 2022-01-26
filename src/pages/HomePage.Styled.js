import styled from 'styled-components';

export const StyledHomePage = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 1rem;
	width: 100%;
	height: 100%;
	padding: 1rem;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	@media only screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.title {
		font-size: 2rem;
		font-weight: 300;
		color: #dab55d;
		white-space: nowrap;
	}

	.message {
		max-width: 75ch;
		height: auto;
		font-size: 1rem;
		font-weight: 300;
		text-align: justify;
	}

	.links {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 90%;
		margin: 2rem;

		button {
			width: 9rem;
			text-transform: uppercase;
			color: #dab55d;
		}
	}
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.signin-methods {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		place-items: center;
		width: 100%;
		height: auto;
		margin: auto 0;

		button {
			svg {
				width: 80%;
				height: 80%;
			}
		}

		h2 {
			grid-column: 1 / 4;
			grid-row: 2 / 3;

			font-size: 1rem;
			font-weight: 400;
		}
	}

	.redirect {
		margin-top: auto;
		font-size: 0.9rem;
		font-weight: 400;
		white-space: nowrap;

		span {
			color: #dab55d;
		}
	}
`;
