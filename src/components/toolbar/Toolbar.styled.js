import styled from 'styled-components';

const testBorder = (color = '#add8e64f') => `border: 0.1px solid ${color}`;

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledToolbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 5rem;
	margin: 1rem;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 4rem;
	height: 100%;
	margin: 0 0.5rem;
`;

export const Button = styled.button`
	width: 3rem;
	height: 3rem;
	margin: 0 1rem;
	padding: 0.5rem;

	border: 1px solid #2525255e;
	border-radius: 10px;
	background-color: transparent;
	box-shadow: 2px 2px 3px #1e1e1e;

	svg {
		width: 100%;
		height: 100%;
	}
`;

export const Title = styled.h1`
	font-family: 'Roboto', serif;
	font-size: 0.8rem;
	font-weight: 300;
	color: #c3c3c3;
	white-space: nowrap;
`;
