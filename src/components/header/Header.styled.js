import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 30px;
`;

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
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto;
	grid-column-gap: 1rem;
	margin-left: auto;
`;
