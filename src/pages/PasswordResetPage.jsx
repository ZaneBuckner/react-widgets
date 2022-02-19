import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';

import Page from './Page';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';
import UserAlert from 'components/shared/UserAlerts';

import { StyledResetPasswordForm } from './Pages.Styled';
import { MdEmail as EmailIcon } from 'react-icons/md';

export default function PasswordResetPage() {
	const { onPasswordReset } = useAuthContext();

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	const handleSubmitClick = async e => {
		e.preventDefault();

		setEmailError(false);
		email || setEmailError('Please enter an email address.');

		if (!emailError) {
			try {
				setSuccessMessage('');
				setError('');
				setLoading(true);
				await onPasswordReset(email);
				setSuccessMessage('Check your email to reset password.');
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
				setEmail('');
			}
		}
	};

	return (
		<Page>
			<h1 className='title'>Reset Password</h1>
			{error && <UserAlert className='user-message' variant='error' message={error} />}
			{successMessage && (
				<UserAlert className='user-message' variant='success' message={successMessage} />
			)}
			<StyledResetPasswordForm className='body' autoComplete='off'>
				<InputField
					required
					type='email'
					label='Email'
					icon={<EmailIcon />}
					value={email}
					error={emailError}
					helperText={emailError}
					onChange={e => setEmail(e.target.value)}
				/>
				<Button
					animate
					type='submit'
					size='large'
					text='Reset'
					onClick={handleSubmitClick}
					disabled={loading}
				/>
			</StyledResetPasswordForm>
			<div className='footer'>
				<Link className='link' to='/login' children='LOGIN' />
			</div>
		</Page>
	);
}
