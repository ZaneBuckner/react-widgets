import styled from 'styled-components';

export const StyledClock = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	.CircularProgressbar {
		position: absolute;
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
`;

export const StyledClockFace = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 12rem;
	height: 12rem;

	font-family: 'Roboto', serif;
	color: #b3b3b3;
`;

export const TimeDisplay = styled.div`
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

export const DateDisplay = styled.div`
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
