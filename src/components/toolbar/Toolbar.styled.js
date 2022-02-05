import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const StyledContainer = styled.div`
	position: relative;
	width: 100%;
	height: 7rem;

	box-shadow: inset 0 6px 13px -4px rgb(0 0 0 / 48%), inset 0 -6px 13px -4px rgb(0 0 0 / 48%);

	.nav-icon {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;

		font-size: 1.5rem;
		color: #c3c3c3;

		animation: ${pulse} 10s ease-in-out infinite;

		@media only screen and (min-width: 700px) {
			display: none;
		}
	}

	.left {
		left: 0;
	}

	.right {
		right: 0;
	}
`;

export const StyledToolbar = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 3rem;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
	padding: 0 3rem;

	overflow-x: scroll;

	/* HIDE SCROLLBAR | KEEP FUNCTIONALITY */
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE Edge */
	::-webkit-scrollbar {
		display: none; /* Chrome Safari Opera */
	}
`;

export const StyledWidgetWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 4rem;
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
		margin-top: 0.2rem;

		font-family: 'Roboto', serif;
		font-size: 0.8rem;
		font-weight: 300;
		color: #c3c3c3;
		white-space: nowrap;
	}
`;
