import styled from 'styled-components';

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 0.8rem;
	background: #333333;
	border: #505050;
	border-radius: 10px;
	box-shadow: 0 1px 7px 1px rgba(0, 0, 0, 0.48);
	cursor: pointer;
	transition: 0.3s ease;

	font-family: 'Lato';
	font-size: 1rem;
	text-transform: uppercase;
	color: #b3b3b3;

	&:hover {
		background: #2a2a2a;
	}
`;

/*
USING PROPS TO CUSTOMIZE STYLED BUTTON COMPONENT

background: ${props => (props.primary ? 'option1' : 'option2')}

'{css}' required to write multiple lines of CSS
${props =>
  props.primary &&
  css`
    background: white;
    color: white;
  `}

*/
