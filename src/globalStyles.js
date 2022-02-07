import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: ${({ header }) => (header ? 'none' : '1200px')};
	margin: ${({ centerJustify }) => (centerJustify ? 'auto' : '0 auto')};
	padding: ${({ header }) => (header ? '0 30px' : '0 50px')};

	@media (max-width: 500px) {
		padding: 0 25px;
	}
`;
