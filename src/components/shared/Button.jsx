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

const StyledLabel = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;

	font-family: 'Roboto', serif;
	font-size: 1rem;
	font-weight: 300;
	color: #c3c3c3;
	white-space: nowrap;

	cursor: pointer;
	transition: 250ms ease-in-out;

	svg {
		width: auto;
		height: 100%;
		color: #dab55d;
		margin-right: 0.5rem;
	}

	&:hover {
		filter: brightness(1.2) saturate(1.1);
	}

	${({ size }) =>
		size &&
		buttonSizes[size] &&
		`
    width: ${buttonSizes[size].width};
    height: 3rem;
  `}
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	transition: 250ms ease-in-out;

	&:hover {
		filter: brightness(1.2) saturate(1.1);
	}

	&:disabled {
		opacity: 0.4;
		filter: saturate(40%);
		pointer-events: none;
	}

	svg {
		width: auto;
		height: 100%;
		color: #dab55d;
	}

	${({ size }) =>
		size &&
		buttonSizes[size] &&
		`
    width: ${buttonSizes[size].width};
    height: 3rem;
  `}

	${({ text }) =>
		text &&
		`
    font-size: 1rem;
    text-transform: uppercase;
    color: #DAB55D;
    white-space: nowrap;
  `}

  ${({ variant }) =>
		variant === 'combo' &&
		`
    font-family: 'Roboto', serif;
    font-size: 1rem;
    font-weight: 300;
    color: #C3C3C3;
    white-space: nowrap;

    svg {
      margin-right: 0.5rem;
      height: 80%;

    }
  `}
`;

const buttonSizes = {
	auto: {
		width: 'auto',
	},
	small: {
		width: '3rem',
	},
	medium: {
		width: '6rem',
	},
	large: {
		width: '9rem',
	},
};

const buttonStates = {
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

export default function Button({
	buttonState,
	animate,
	disabled,
	variant,
	icon,
	text,
	className,
	children,
	...props
}) {
	const StatefulButton = (
		<AnimatedWrapper
			key={disabled}
			variants={buttonStates}
			initial={buttonState ? 'clickable' : 'clicked'}
			animate={buttonState ? 'clicked' : 'clickable'}
			transition='transition'
		>
			<StyledButton
				variant={variant}
				icon={icon}
				text={text}
				disabled={disabled}
				className={className}
				{...props}
			>
				{icon}
				{text}
				{children}
			</StyledButton>
		</AnimatedWrapper>
	);

	const AnimatedButton = (
		<AnimatedWrapper
			key={disabled}
			variants={buttonStates}
			initial={disabled ? 'clicked' : 'clickable'}
			whileTap='whileTap'
			transition='transition'
			className={className}
		>
			<StyledButton variant={variant} icon={icon} text={text} disabled={disabled} {...props}>
				{icon}
				{text}
				{children}
			</StyledButton>
		</AnimatedWrapper>
	);

	const StaticButton = (
		<StyledButton variant={variant} icon={icon} text={text} className={className} {...props}>
			{icon}
			{text}
			{children}
		</StyledButton>
	);

	if (buttonState) return StatefulButton;
	else if (animate) return AnimatedButton;
	else return StaticButton;
}

export function FileInputButton({ disabled, icon, text, onImageSelect, ...props }) {
	return (
		<AnimatedWrapper
			key={disabled}
			variants={buttonStates}
			initial={disabled ? 'clicked' : 'clickable'}
			whileTap='whileTap'
			transition='transition'
		>
			<input
				id='file'
				type='file'
				accept='image/png, image/jpeg, image/svg+xml'
				onChange={onImageSelect}
				style={{ display: 'none' }}
			/>
			<StyledLabel htmlFor='file' {...props}>
				{icon}
				{text}
			</StyledLabel>
		</AnimatedWrapper>
	);
}
