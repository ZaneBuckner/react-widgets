import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	max-width: 1200px;
	margin: auto;
	padding: 1rem 0;
`;

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 12rem;
	margin-left: auto;

	button {
		width: 3rem;
		height: 3rem;
		padding: 0.7rem;

		svg {
			width: 100%;
			height: 100%;
			fill: #dab55d;
			font-size: 1.5rem;
		}
	}
`;
