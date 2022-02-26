import styled from 'styled-components';

export const StyledCounter = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: repeat(2, auto);
	justify-items: center;
	align-items: center;
	width: 100%;
	height: 20rem;

	.count-display {
		display: grid;
		grid-template-columns: repeat(3, auto);
		justify-items: center;
		align-items: center;
		width: 100%;
		margin-top: auto;
	}

	.count-reset {
		margin-top: auto;
	}
`;

export const CountDisplay = styled.h1`
	width: 100%;
	font-family: 'Lato', serif;
	font-size: 4rem;
	text-align: center;

	/* TEXT SHADOW EFFECT */
	background-color: #161616;
	color: transparent;
	text-shadow: 2px 2px 3px #333333;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
`;
