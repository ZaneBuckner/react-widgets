import styled from 'styled-components';

const testBorder = (color = '#add8e64f') => `border: 0.1px solid ${color}`;
const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const grey = {
	100: '#707070',
	200: '#5B5B5B',
	300: '#474747',
	400: '#333333',
	500: '#1E1E1E',
	600: '#0A0A0A',
	700: '#000000',
};

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
`;
