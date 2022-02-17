import { styled } from '@mui/material/styles';

import Button from './Button';
import Avatar from '@mui/material/Avatar';

import { FaUserCircle as DefaultIcon, FaImages as ImageFileIcon } from 'react-icons/fa';
import { IoMdCloudDone as UploadIcon } from 'react-icons/io';

export function UserAvatar({ size, variant, src }) {
	return (
		<StyledAvatar size={size} variant={variant} src={src}>
			<DefaultIcon />
		</StyledAvatar>
	);
}

export function UserAvatarBrowse({ onImageSelect }) {
	return (
		<Button animate size='large' variant='combo' icon={<ImageFileIcon />}>
			<label htmlFor='input'>
				<input
					id='input'
					type='file'
					accept='image/png, image/jpeg, image/svg+xml'
					style={{ display: 'none' }}
					onChange={onImageSelect}
				/>
				<span style={{ cursor: 'pointer' }}>Browse...</span>
			</label>
		</Button>
	);
}

export function UserAvatarUpload({ onImageUpload, loading }) {
	return (
		<Button
			animate
			size='large'
			variant='combo'
			icon={<UploadIcon />}
			children='Save Avatar'
			disabled={loading}
			onClick={onImageUpload}
		/>
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
