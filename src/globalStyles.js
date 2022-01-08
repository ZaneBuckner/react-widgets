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
		box-shadow: 2px 6px 13px -4px rgb(0 0 0 / 48%);
	`};

	${({ toolbar }) =>
		toolbar &&
		`
    padding: 0 30px;
	`};
`;
