import styled from 'styled-components';

export const StyledCounter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	height: 20rem;
`;

export const CountDisplay = styled.h1`
	width: 8rem;

	font-family: 'Lato', serif;
	font-size: 3rem;
	text-align: center;

	/* TEXT SHADOW EFFECT */
	background-color: #161616;
	color: transparent;
	text-shadow: 2px 2px 3px #333333;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
`;
