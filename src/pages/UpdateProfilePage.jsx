import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import { storeUserImage } from 'context/FirebaseStorage';
import { formatErrorCode, fetchSearchLocation, getCountryFlagEmoji } from 'utils/util';
import styled from 'styled-components';

import Page from './Page';
import Button, { FileInputButton } from 'components/shared/Button';
import InputField from 'components/shared/InputField';
import UserAlert from 'components/shared/UserAlerts';
import { UserAvatar } from 'components/shared/Avatar';
import { StyledUpdateForm } from './Pages.Styled';

import { CodewarsIcon } from 'Assets/WidgetIcons';
import { IoIosMail as EmailIcon } from 'react-icons/io';
import { MdLock as PasswordIcon } from 'react-icons/md';
import { AiOutlineUser as UsernameIcon } from 'react-icons/ai';
import { CgFileRemove as RemoveFileIcon } from 'react-icons/cg';
import { IoLocationSharp as LocationIcon } from 'react-icons/io5';
import { IoPersonRemove as DeleteAccountIcon } from 'react-icons/io5';
import { BiReset as ResetAccountIcon } from 'react-icons/bi';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
import { FaImages as ImageFileIcon } from 'react-icons/fa';

export default function UpdateProfilePage() {
	const navigate = useNavigate();
	const {
		userData,
		currentUser,
		onEmailUpdate,
		onAccountDelete,
		onPasswordUpdate,
		onUsernameUpdate,
		onDocumentUpdate,
		onDocumentDelete,
		onDocumentReset,
	} = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState('');
	const [updateSuccess, setUpdateSuccess] = useState('');

	// FORM VALUES
	const [photoURL, setPhotoURL] = useState('');
	const [imagePreview, setImagePreview] = useState('');
	const [username, setUsername] = useState('');
	const [codewars, setCodewars] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	// LOCATION SEARCH VALUES
	const [locationSearch, setLocationSearch] = useState('');
	const [locationSearchResults, setLocationSearchResults] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState('');
	const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

	// ERROR VALUES
	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	// METHODS

	const handleSelectedResult = result => {
		setSelectedLocation(result);
		handleSearchClose();
	};

	const handleSearchClose = () => {
		setLocationSearchResults([]);
		setLocationSearch('');
	};

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
			await onDocumentDelete();
		} catch (err) {
			setError(formatErrorCode(err.code));
		}
	};

	const handleAccountReset = async () => {
		try {
			const message = 'Are you sure you wish to reset account data?';
			if (!window.confirm(message)) return;
			await onDocumentReset();
		} catch (err) {
			setError(formatErrorCode(err.code));
		}
	};

	// FORM VALIDATION

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
		setEmail(''),
		setPassword(''),
		setPasswordConfirm(''),
	];

	const handleSubmit = async e => {
		e.preventDefault();
		resetErrors();
		const promises = [];

		if (photoURL) {
			promises.push(storeUserImage(currentUser, photoURL, setLoading, setError, setSuccess));
		}

		if (username) {
			promises.push(onUsernameUpdate(username));
			onDocumentUpdate({ username: username });
		}

		if (selectedLocation) {
			const updatedLocation = {
				city: selectedLocation.name,
				state: selectedLocation?.state || '',
				country: regionNames.of(selectedLocation.country),
				flag: getCountryFlagEmoji(selectedLocation.country),
				lat: selectedLocation.lat,
				lon: selectedLocation.lon,
			};
			promises.push(onDocumentUpdate({ location: updatedLocation }));
		}

		if (codewars) {
			promises.push(onDocumentUpdate({ codewarsUsername: codewars }));
		}

		if (email) {
			if (email === currentUser.email) return setEmailError('Please enter a new email address.');
			promises.push(onEmailUpdate(email));
		}

		if (password) {
			if (password.length < 6) setPasswordError('Passwords must be at least 6 characters.');
			else if (password !== passwordConfirm) return setPasswordError('Passwords do not match.');
			promises.push(onPasswordUpdate(password));
		}

		if (promises.length === 0) return;

		try {
			setLoading(true);
			await Promise.all(promises);
			setUpdateSuccess('Profile updated!');
			email && !emailError && onDocumentUpdate({ email: email });
		} catch (err) {
			setError(formatErrorCode(err.code));
		} finally {
			resetValues();
			setLoading(false);
		}
	};

	// WHEN USER SEARCHES LOCATION => FETCH RESULTS
	useEffect(() => {
		locationSearch && fetchSearchLocation(locationSearch, setLocationSearchResults);
	}, [locationSearch]);

	// REDIRECTS TO USER PROFILE AFTER SUCCESSFUL UPDATE ON UNMOUNT
	useEffect(() => {
		if (updateSuccess) {
			const timer = setTimeout(() => navigate('/profile'), 1500);
			return () => clearTimeout(timer);
		}
	}, [updateSuccess, navigate]);

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

			<StyledUpdateForm type='submit' autoComplete='off' onSubmit={handleSubmit} className='body'>
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
					<FileInputButton
						size='large'
						icon={<ImageFileIcon />}
						text='Browse...'
						onImageSelect={handleSelectedImage}
					/>
				</AvatarInput>

				<InputField
					type='text'
					label='Username'
					placeholder={currentUser?.displayName || 'No Username Saved'}
					value={username}
					icon={<UsernameIcon />}
					onChange={e => setUsername(e.target.value)}
				/>

				<LocationSearchWrapper>
					<InputField
						type='text'
						label='User Location'
						placeholder={
							selectedLocation
								? `${selectedLocation.name}, ${selectedLocation?.state || selectedLocation.country}`
								: 'User Location'
						}
						value={locationSearch}
						onChange={e => setLocationSearch(e.target.value)}
						icon={<LocationIcon />}
					/>

					{locationSearchResults.length > 0 && (
						<div className='search-results'>
							<CloseIcon className='close-icon' onClick={handleSearchClose} />
							{locationSearchResults.map(result => (
								<div
									key={uuidv4()}
									value={result}
									onClick={() => handleSelectedResult(result)}
									className='result'
								>
									{result.state
										? `${result.name}, ${result.state} (${regionNames.of(result.country)})`
										: `${result.name} (${regionNames.of(result.country)})`}
								</div>
							))}
						</div>
					)}
				</LocationSearchWrapper>

				<InputField
					type='text'
					label='Codewars Username'
					placeholder={userData?.codewarsUsername || 'No username saved'}
					value={codewars}
					onChange={e => setCodewars(e.target.value)}
					icon={<CodewarsIcon width='0.9em' height='0.9em' color='#C3C3C3' />}
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
					autoComplete='new-password'
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
			<div className='links'>
				<Link className='link' to='/profile' children='CANCEL' />
			</div>
			<StyledFooter>
				<Button
					animate
					size='auto'
					variant='combo'
					icon={<DeleteAccountIcon />}
					children='Delete Account'
					onClick={handleAccountDelete}
					className='btn'
				/>
				<Button
					animate
					size='auto'
					variant='combo'
					icon={<ResetAccountIcon />}
					children='Reset Account'
					onClick={handleAccountReset}
					className='btn'
				/>
			</StyledFooter>
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

const LocationSearchWrapper = styled.div`
	position: relative;
	width: 100%;

	.search-results {
		position: absolute;
		z-index: 2;
		top: 4rem;
		left: 0;

		display: grid;
		grid-template-rows: auto;
		grid-row-gap: 0.2rem;
		width: clamp(10rem, 68vw, 37.5rem);
		padding: 0.2rem;
		margin-left: 2.3rem;

		border: 1px solid #c3c3c3;
		border-radius: 10px;
		background-color: rgb(45 45 45 / 30%);
		backdrop-filter: blur(5px) saturate(10%);

		.close-icon {
			margin-left: auto;
			font-size: 1.7rem;
			cursor: pointer;
		}

		.result {
			padding: 0.2rem;

			font-family: 'Montserrat', serif;
			font-size: clamp(8px, 2.5vw, 13px);
			font-weight: 500;
			color: #c3c3c3;

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			cursor: pointer;

			&:hover {
				color: #dab55d;
			}
		}
	}
`;

const StyledFooter = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	place-items: center;
	align-items: center;
	width: 100%;
	height: auto;
	margin-top: 4rem;

	div {
		button {
			color: #d92626;
			font-weight: 400;
		}
	}

	@media only screen and (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, auto);
		grid-row-gap: 1rem;
	}
`;
