import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { storeUserImage } from 'context/FirebaseStorage';
import { updateUserDocument, deleteUserDocument } from 'context/FirebaseFirestore';
import { formatErrorCode } from 'utils/util';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';
import UserAlert from 'components/shared/UserAlerts';
import { UserAvatar, UserAvatarBrowse } from 'components/shared/Avatar';
import { StyledUpdateForm } from './Pages.Styled';

// prettier-ignore
import { MdEmail as EmailIcon, MdLock as PasswordIcon, MdOutlineLocationOn as LocationIcon } from 'react-icons/md';
import { AiOutlineUser as UsernameIcon } from 'react-icons/ai';
import { CgFileRemove as RemoveFileIcon } from 'react-icons/cg';

export default function UpdateProfilePage() {
	const navigate = useNavigate();
	const {
		userData,
		currentUser,
		onEmailUpdate,
		onAccountDelete,
		onPasswordUpdate,
		onUsernameUpdate,
	} = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState('');
	const [updateSuccess, setUpdateSuccess] = useState('');

	// FORM VALUES
	const [photoURL, setPhotoURL] = useState('');
	const [imagePreview, setImagePreview] = useState('');
	const [username, setUsername] = useState('');
	const [userLocaton, setUserLocation] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	// ERROR VALUES
	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const resetErrors = () => [
		setError(''),
		setEmailError(''),
		setPasswordError(''),
		setSuccess(''),
		setUpdateSuccess(''),
	];

	const resetValues = () => [
		setPhotoURL(''),
		setUsername(''),
		setUserLocation(''),
		setEmail(''),
		setPassword(''),
		setPasswordConfirm(''),
	];

	const handleSelectedImage = e => {
		const selectedImage = e.target.files[0];
		setPhotoURL(selectedImage);
		setImagePreview(URL.createObjectURL(selectedImage));
	};

	const handleImageRemove = () => setImagePreview(URL.revokeObjectURL(imagePreview));

	const handleAccountDelete = async () => {
		try {
			const message = 'Are you sure you wish to delete your account?';
			if (!window.confirm(message)) return;
			await onAccountDelete();
			deleteUserDocument(currentUser);
		} catch (err) {
			setError(formatErrorCode(err.code));
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		resetErrors();
		const promises = [];

		photoURL && storeUserImage(currentUser, photoURL, setLoading, setError, setSuccess);

		if (username) {
			promises.push(onUsernameUpdate(username));
			updateUserDocument(currentUser, { username: username });
		}

		if (email) {
			if (email === currentUser.email) setEmailError('Please enter a new email address.');
			promises.push(onEmailUpdate(email));
			updateUserDocument(currentUser, { email: email });
		}

		if (password) {
			if (password.length < 6) setPasswordError('Passwords must be at least 6 characters.');
			else if (password !== passwordConfirm) setPasswordError('Passwords do not match.');
			promises.push(onPasswordUpdate(password));
		}

		if (promises.length === 0) return;

		try {
			setLoading(true);
			await Promise.all(promises);
			setUpdateSuccess('Profile updated!');
		} catch (err) {
			setError(formatErrorCode(err.code));
		} finally {
			resetValues();
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!updateSuccess) return;
		const timer = setTimeout(() => {
			navigate('/profile');
		}, 1500);
		return () => clearTimeout(timer);
	}, [updateSuccess, navigate]);

	useEffect(() => {
		userData?.location && setUserLocation(`${userData.location.city}, ${userData.location.state}`);
	}, [userData]);

	return (
		<Page>
			<h1 className='title'>Update Profile</h1>
			<div className='user-messages'>
				{error && <UserAlert variant='error' message={error} />}
				{emailError && <UserAlert variant='error' message={emailError} />}
				{passwordError && <UserAlert variant='error' message={passwordError} />}
				{success && <UserAlert variant='success' message={success} />}
				{updateSuccess && <UserAlert variant='success' message={updateSuccess} />}
			</div>

			<StyledUpdateForm className='body'>
				<AvatarInput>
					<div className='avatar-preview'>
						<UserAvatar size='small' src={imagePreview || currentUser.photoURL} />
						<p>preview</p>
						{imagePreview && (
							<RemoveFileIcon
								className='remove-preview'
								onClick={handleImageRemove}
								title='Remove Image'
							/>
						)}
					</div>
					<UserAvatarBrowse onImageSelect={handleSelectedImage} />
				</AvatarInput>

				<InputField
					type='text'
					label='Username'
					placeholder={currentUser.displayName || 'Update Username'}
					value={username}
					icon={<UsernameIcon />}
					onChange={e => setUsername(e.target.value)}
				/>

				<InputField
					type='text'
					label='Location'
					placeholder={userLocaton || 'Update Location'}
					// value={userLocaton}
					// error={...}
					// helperText={...}
					// onChange={e => setUserLocaton(e.target.value)}
					icon={<LocationIcon />}
				/>

				<InputField
					type='email'
					label='Email'
					placeholder={currentUser.email}
					value={email}
					error={emailError ? true : false}
					helperText={emailError}
					onChange={e => setEmail(e.target.value)}
					icon={<EmailIcon />}
				/>

				<InputField
					type='password'
					label='Password'
					placeholder='Update Password'
					value={password}
					error={passwordError ? true : false}
					helperText={passwordError}
					onChange={e => setPassword(e.target.value)}
					icon={<PasswordIcon />}
					autoComplete='new-password'
				/>

				<InputField
					type='password'
					label='Confirm Password'
					placeholder='Confirm New Password'
					value={passwordConfirm}
					error={passwordError ? true : false}
					helperText={passwordError}
					onChange={e => setPasswordConfirm(e.target.value)}
					icon={<PasswordIcon />}
				/>

				<Button
					animate
					type='submit'
					size='large'
					text='Save'
					onClick={handleSubmit}
					disabled={loading}
				/>
			</StyledUpdateForm>
			<Button animate size='large' text='Delete Account' onClick={handleAccountDelete} />
			<div className='footer'>
				<Link className='link' to='/profile' children='CANCEL' />
			</div>
		</Page>
	);
}

const AvatarInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;

	.avatar-preview {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 5rem;

		p {
			margin-top: 0.5rem;
			font-size: 0.8rem;
			font-weight: 300;
			text-transform: uppercase;
		}

		.remove-preview {
			position: absolute;
			top: -5px;
			right: -5px;

			color: #dab55d;
			font-size: 1.2rem;
			cursor: pointer;
		}
	}

	@media only screen and (max-width: 500px) {
		flex-direction: column;
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: auto;
		grid-row-gap: 1rem;
		place-items: center;
	}
`;
