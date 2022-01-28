import styled from 'styled-components';

// HOME PAGE STYLES
export const StyledHomePage = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	place-items: center;
	width: 100%;
	height: 50vh;
	padding: 1rem;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.title {
		grid-area: 1 / 1 / 2 / 3;
		font-size: 2rem;

		font-weight: 300;
		color: #dab55d;
		white-space: nowrap;
		max-width: 100%;
	}

	.message {
		grid-area: 2 / 1 / 3 / 3;
		max-width: 75ch;
		height: auto;
		font-size: 1rem;
		font-weight: 300;
		/* text-align: justify; */
	}

	.links {
		grid-area: 3 / 1 / 4 / 4;
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

	.redirect {
		grid-area: 4 / 1 / 5 / 3;
		margin-top: auto;

		.link {
			color: #dab55d;
		}
	}

	@media only screen and (max-width: 550px) {
		.title {
			font-size: 1.5rem;
		}

		.links {
			flex-direction: column;
			button {
				margin: 0.5rem;
			}
		}
	}

	@media only screen and (max-width: 400px) {
		.title {
			font-size: 1rem;
		}

		.message {
			font-size: 0.8rem;
		}
	}
`;

// LOGIN PAGE STYLES
export const StyledLoginPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 50vh;
	place-items: center;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	h1 {
		font-size: 2rem;
		font-weight: 300;
		color: #dab55d;
		white-space: nowrap;
	}

	.user-forgets {
		margin-top: auto;

		&:hover {
			color: #dab55d;
		}
	}
`;

export const StyledLoginForm = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 2fr;
	grid-row-gap: 2rem;
	place-items: center;
	width: 100%;
	margin: auto 0;

	.submit-btn {
		width: 9rem;
		text-transform: uppercase;
		color: #dab55d;
	}
`;

// REGISTER PAGE STYLES
export const StyledRegisterPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 50vh;
	place-items: center;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	h1 {
		font-size: 2rem;
		font-weight: 300;
		color: #dab55d;
		white-space: nowrap;
	}
`;

export const StyledRegisterForm = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr 2fr;
	grid-row-gap: 2rem;
	place-items: center;
	width: 100%;
	margin: auto 0;

	.submit-btn {
		width: 9rem;
		text-transform: uppercase;
		color: #dab55d;
	}
`;
