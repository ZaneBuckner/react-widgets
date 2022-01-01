import styled from 'styled-components';

const testBorder = (color = '#add8e64f') => `border: 0.1px solid ${color}`;
const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;
const colors = {
	light: '#DFC780',
	medium: '#DAB55D',
	dark: '#B69037',
	veryDark: '#AA8733',
	grey: '#B3B3B3',
};

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	max-width: 1200px;
	margin: auto;
	padding: 0.5rem 0;

	font-family: 'Roboto', serif;
`;

export const Title = styled.h1`
	margin: auto;

	font-size: 2.5rem;

	background: -webkit-linear-gradient(#dfc780, #aa8733);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 12rem;
	margin-left: auto;
`;

export const NavLink = styled.a``;
