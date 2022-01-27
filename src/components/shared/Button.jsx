import styled from 'styled-components';
import { motion } from 'framer-motion';

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
	box-shadow: ${({ isClicked }) =>
		!isClicked ? '2px 2px 3px #1e1e1e' : 'inset 2px 2px 3px #1e1e1e'};
	white-space: nowrap;

	color: #c3c3c3;

	a {
		${flexCenter};
	}

	svg {
		color: #c3c3c3;
	}
`;

function Button({ isClicked, displayed, animate, text, className, children, ...buttonProps }) {
	if (animate) {
		return (
			<motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
				<StyledButton isClicked={isClicked} className={className} {...buttonProps}>
					{text}
					{children}
				</StyledButton>
			</motion.div>
		);
	}
	return (
		<StyledButton className={className} {...buttonProps}>
			{text}
			{children}
		</StyledButton>
	);
}

export default Button;
