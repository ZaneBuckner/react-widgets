import styled from 'styled-components';

const testBorder = 'border: 0.1px solid #add8e64f';
const fonts = ['DM Sans', 'Raleway', 'Karla', 'Lato', 'El Messiri', 'Josefin Sans', 'Poiret One', 'Roboto'];

export const StyledClock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	.clock-face {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 12rem;
		height: 12rem;
		border-radius: 50%;

		font-family: 'Roboto', serif;
		color: #b3b3b3;

		.CircularProgressbar {
			position: absolute;
			width: 100%;
			vertical-align: middle;
		}
	}
`;

export const ClockTimeDisplay = styled.div`
	position: relative;
	display: flex;

	.primary {
		font-size: 2.5rem;
		font-weight: 100;
		letter-spacing: 3px;
	}

	.secondary {
		position: absolute;
		top: 0;
		right: -1.2rem;
		bottom: 0;
		margin: auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 0.8rem;
			opacity: 50%;
			margin-left: 10px;
		}
	}
`;

export const ClockDateDisplay = styled.div`
	position: absolute;
	bottom: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 5rem;
	opacity: 50%;

	h2 {
		font-size: 0.7rem;
		text-align: center;
		text-transform: uppercase;
		font-weight: 100;
	}

	.day {
		font-size: 1rem;
		font-weight: 300;
	}
`;
