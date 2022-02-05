import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	margin-top: auto;

	box-shadow: inset 0 6px 13px -4px rgb(0 0 0 / 48%);
	background-color: #2b2b2b;
`;

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
	height: auto;
	margin: 0 auto;
	padding: 1rem;

	.site-title {
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-template-rows: 1fr;
		grid-column-gap: 1rem;
		height: 100%;

		h1 {
			font-family: 'Montserrat', serif;
			font-size: 1rem;
			color: #dab55d;
			white-space: nowrap;
		}

		svg {
			height: 1.5rem;
		}
	}

	.buttons-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 1rem;

		svg {
			width: 100%;
			height: 100%;
			fill: #dab55d;
			font-size: 1.5rem;
		}
	}

	@media only screen and (max-width: 390px) {
		flex-direction: column;
		justify-content: center;

		.site-title,
		.buttons-wrapper {
			place-items: center;
		}

		.buttons-wrapper {
			margin-top: 1rem;
		}
	}
`;
