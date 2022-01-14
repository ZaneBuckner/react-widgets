import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	/* max-width: ${props => (props.header ? 'none' : '1200px')}; */
	margin: 0 auto;
	padding: 0 50px;

	${({ header }) =>
		header &&
		`
    padding: 0 30px;
		max-width: none;
	`};

	@media (max-width: 500px) {
		padding: 0 25px;
	}
`;
