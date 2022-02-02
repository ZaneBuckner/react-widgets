import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';

import Page from './Page';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';
import UserAlert from 'components/shared/UserAlerts';

import { StyledResetPasswordPage, StyledSuccessMessage } from './Pages.Styled';
import { MdEmail as EmailIcon } from 'react-icons/md';
import { BiCheckShield as SuccessIcon } from 'react-icons/bi';

function PasswordResetPage() {
	const { onPasswordReset } = useAuthContext();

	const [email, setEmail] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState(false);

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
				console.log(error);
			} finally {
				setLoading(false);
				setEmail('');
			}
		}
	};

	return (
		<Page>
			<StyledResetPasswordPage>
				<h1>Reset Password</h1>
				{successMessage && <UserAlert variant='success' message={successMessage} />}
				<form autoComplete='off'>
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
						type='submit'
						className='submit-btn'
						children='Reset'
						onClick={handleSubmitClick}
						disabled={loading}
					/>
				</form>
				<div className='login-redirect'>
					<Link className='redirect' to='/login' children='Sign In' />
				</div>
			</StyledResetPasswordPage>
		</Page>
	);
}

export default PasswordResetPage;
