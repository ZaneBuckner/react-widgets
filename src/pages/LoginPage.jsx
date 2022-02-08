import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import Page from './Page';
import Button from 'components/shared/Button';
import UserAlert from 'components/shared/UserAlerts';
import InputField from 'components/shared/InputField';

import { StyledLoginForm } from './Pages.Styled';
import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

export default function LoginPage() {
	const navigate = useNavigate();
	const { onLogin } = useAuthContext();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmitClick = async e => {
		e.preventDefault();

		setEmail('');
		setPassword('');
		setEmailError(false);
		setPasswordError(false);
		email || setEmailError('Please enter an email address.');
		password || setPasswordError('Please enter a password.');

		if (!emailError && !passwordError) {
			try {
				setError('');
				setLoading(true);
				await onLogin(email, password);
				setLoading(false);
				navigate('/profile');
			} catch (err) {
				setError(err.code);
				setLoading(false);
			}
		}
	};

	return (
		<Page>
			<h1 className='title'>Welcome Back</h1>
			{error && <UserAlert className='user-message' variant='error' message={error} />}
			<StyledLoginForm className='body' autoComplete='off'>
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
				<InputField
					required
					type='password'
					label='Password'
					icon={<PasswordIcon />}
					value={password}
					autoComplete='new-password'
					error={passwordError}
					helperText={passwordError}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button
					animate
					type='submit'
					className='submit-btn'
					children='Log In'
					onClick={handleSubmitClick}
					disabled={loading}
				/>
			</StyledLoginForm>
			<div className='links'>
				<Link className='user-forgets' to='/password-reset' children='Forgot your password?' />
			</div>
			<div className='footer'>
				Need an account?&nbsp;
				<Link className='link' to='/register' children='SIGNUP' />
			</div>
		</Page>
	);
}
