import styled, { css } from 'styled-components';

const testBorder = (color = '#add8e64f') => `border: 0.1px solid ${color}`;
const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
	${flexCenter};
	width: 3rem;
	height: 3rem;
	padding: 0.5rem;

	border: 1px solid #2525255e;
	border-radius: 10px;
	background-color: transparent;
	box-shadow: 2px 2px 3px #1e1e1e;

	a {
		${flexCenter};
	}
`;

function Button({ title, href, children }) {
	return <StyledButton>{children}</StyledButton>;
}

export default Button;
