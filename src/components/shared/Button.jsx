import styled from 'styled-components';

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
	${flexCenter};
	min-width: 3rem;
	min-height: 3rem;
	padding: 0.5rem;

	border: 1px solid #2525255e;
	border-radius: 10px;
	background-color: transparent;
	box-shadow: 2px 2px 3px #1e1e1e;
	white-space: nowrap;

	color: #c3c3c3;

	a {
		${flexCenter};
	}

	svg {
		color: #c3c3c3;
	}
`;

function Button({ className, children, ...buttonProps }) {
	return (
		<StyledButton className={className} {...buttonProps}>
			{children}
		</StyledButton>
	);
}

export default Button;
