import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import { FaUserCircle as DefaultIcon } from 'react-icons/fa';

export function UserAvatar({ size, variant, src }) {
	return (
		<StyledAvatar size={size} variant={variant} src={src}>
			<DefaultIcon />
		</StyledAvatar>
	);
}

const StyledAvatar = styled(Avatar)`
	width: 100%;
	height: 100%;
	background: transparent;
	color: #dab55d;

	svg {
		width: 100%;
		height: 100%;
	}

	${({ size }) =>
		size === 'small' &&
		`
      width: 4rem;
      height: 4rem;
  `};

	${({ size }) =>
		size === 'medium' &&
		`
      width: 6rem;
      height: 6rem;
  `};
`;
