import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedWrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid #2e2e2e;
	border-radius: 10px;
	background-color: #333333;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 10px;

	color: inherit;
	white-space: nowrap;

	&:disabled {
		opacity: 0.4;
		filter: saturate(40%);
		pointer-events: none;
	}

	svg {
		color: #c3c3c3;
	}
`;

const buttonVariants = {
	clickable: {
		boxShadow: '2px 2px 3px #1E1E1E',
	},
	clicked: {
		boxShadow: 'inset 2px 2px 3px #1E1E1E',
	},
	whileTap: {
		boxShadow: 'inset 2px 2px 3px #1E1E1E',
	},
	transition: {
		type: 'spring',
	},
};

function Button({ buttonState, animate, disabled, className, children, ...props }) {
	const StatefulButton = (
		<AnimatedWrapper
			variants={buttonVariants}
			initial={buttonState ? 'clickable' : 'clicked'}
			animate={buttonState ? 'clicked' : 'clickable'}
			transition='transition'
		>
			<StyledButton disabled={disabled} className={className} {...props}>
				{children}
			</StyledButton>
		</AnimatedWrapper>
	);

	const AnimatedButton = (
		<AnimatedWrapper
			variants={buttonVariants}
			initial={disabled ? 'clicked' : 'clickable'}
			whileTap='whileTap'
			transition='transition'
		>
			<StyledButton disabled={disabled} className={className} {...props}>
				{children}
			</StyledButton>
		</AnimatedWrapper>
	);

	const StaticButton = (
		<StyledButton className={className} {...props}>
			{children}
		</StyledButton>
	);

	if (buttonState) return StatefulButton;
	else if (animate) return AnimatedButton;
	else return StaticButton;
}

export default Button;
