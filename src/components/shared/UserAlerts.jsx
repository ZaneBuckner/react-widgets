import styled from 'styled-components';

import {
	BiErrorAlt as ErrorIcon,
	BiError as WarningIcon,
	BiCheckShield as SuccessIcon,
} from 'react-icons/bi';

export default function UserAlert({ variant, message }) {
	const variantIcon = {
		error: <ErrorIcon />,
		warning: <WarningIcon />,
		success: <SuccessIcon />,
	};

	return (
		<StyledAlert variant={variant}>
			{variantIcon[variant]}
			{message}
		</StyledAlert>
	);
}

const handleVariantColor = variant => {
	switch (variant) {
		case 'error':
			return '#D92626';
		case 'warning':
			return '#CCB233';
		case 'success':
			return '#5EB34D';
		default:
			return '#C3C3C3';
	}
};

const StyledAlert = styled.div`
	display: flex;
	align-items: center;
	color: ${({ variant }) => handleVariantColor(variant)};

	h3 {
		font-size: 1rem;
		font-weight: 400;
	}

	svg {
		font-size: 1.5rem;
		margin-right: 0.5rem;
	}
`;
