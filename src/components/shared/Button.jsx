import styled from 'styled-components';

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

	svg {
		color: #c3c3c3;
	}
`;

/* ${({ nano }) =>
  nano &&
  `
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
`}; */

// const removeCardIcon = {
// 	position: 'absolute',
// 	top: '0px',
// 	right: '0px',
// 	width: '1.5rem',
// 	height: '1.5rem',
// 	margin: '0.25rem',
// 	background: '#333333',
// 	color: '#B3B3B3',
// 	cursor: 'pointer',
// };

function Button({ className, children, ...buttonProps }) {
	return (
		<StyledButton className={className} {...buttonProps}>
			{children}
		</StyledButton>
	);
}

export default Button;

// ${({ test }) =>
// 		test &&
// 		`
//     border-radius: 50%;
// 	`};
