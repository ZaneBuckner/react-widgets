import styled from 'styled-components';

export const StyledContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;

	box-shadow: inset 0 6px 13px -4px rgb(0 0 0 / 48%), inset 0 -6px 13px -4px rgb(0 0 0 / 48%);
`;

export const StyledToolbar = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 0px;

	width: 100%;
	height: auto;
	padding: 1rem 2rem;
	margin-bottom: 2rem;

	overflow-x: scroll;

	/* Removes Scroll Bar Default Styling */
	scrollbar-width: none;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const StyledToolbarNav = styled.div`
	.nav-left,
	.nav-right {
		background-color: rgba(51, 51, 51, 0.9);
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		margin: auto;
		height: 100%;

		font-size: 1.5rem;
		color: #c3c3c3;
	}

	.nav-left {
		left: 0;
	}

	.nav-right {
		right: 0;
	}

	@media (min-width: 800px) {
		display: none;
	}
`;

export const StyledWidgetWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	button {
		width: 3rem;
		height: 3rem;

		svg {
			width: 100%;
			height: 100%;
			fill: #c3c3c3;
		}
	}

	h1 {
		margin-top: 0.5rem;

		font-family: 'Roboto', serif;
		font-size: 0.8rem;
		font-weight: 300;
		color: #c3c3c3;
		white-space: nowrap;
	}
`;
