import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
	width: 100%;
	margin-top: auto;

	box-shadow: inset 0 6px 13px -4px rgb(0 0 0 / 48%);
	background-color: #2b2b2b;

	font-family: 'Montserrat', serif;
	color: #dab55d;
`;

export const StyledFooterWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
	padding: 1rem;
`;

export const StyledSiteLinks = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 1rem;
	align-items: center;
	justify-items: center;

	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.5rem;

		svg {
			width: auto;
			height: 100%;
			margin-right: 1rem;
		}

		.site-title {
			font-size: 1.2rem;
			white-space: nowrap;
		}
	}

	.site-links {
		font-weight: 300;
		color: #c3c3c3;

		&:hover {
			color: #dab55d;
		}
	}

	@media (max-width: 750px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0;
		grid-row-gap: 0.5rem;
		width: 70%;

		.header {
			grid-column: 1 / 6;
			grid-row: 1 / 2;
		}
	}

	@media (max-width: 550px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const StyledFooterIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: auto;

	button {
		width: 3rem;
		height: 3rem;
		padding: 0.7rem;
		margin-left: 1rem;

		svg {
			width: 100%;
			height: 100%;
			fill: #dab55d;
			font-size: 1.5rem;
		}
	}

	@media (max-width: 450px) {
		flex-direction: column;
		width: 30%;
		height: 11rem;
	}
`;
