import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import Page from './Page';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';
import UserAlert from 'components/shared/UserAlerts';

import { StyledLoginPage, StyledLoginForm } from './Pages.Styled';
import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

function LoginPage() {
	const { onLogin } = useAuthContext();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const navigate = useNavigate();

	const handleSubmitClick = async e => {
		e.preventDefault();

		setEmailError(false);
		setPasswordError(false);
		email || setEmailError('Please enter an email address.');
		password || setPasswordError('Please enter a password.');

		if (!emailError && !passwordError) {
			try {
				setError('');
				setLoading(true);
				await onLogin(email, password);
				navigate('/profile');
			} catch (err) {
				setError(err.message);
				console.log(err.message);
			} finally {
				setLoading(false);
				setEmail('');
				setPassword('');
			}
		}
	};

	return (
		<Page>
			<StyledLoginPage>
				<h1>Welcome Back</h1>
				{error && <UserAlert variant='error' message={error} />}
				<StyledLoginForm autoComplete='off'>
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
						type='submit'
						className='submit-btn'
						children='Log In'
						onClick={handleSubmitClick}
						disabled={loading}
					/>
				</StyledLoginForm>
				<Link className='redirect' to='/register' children='Need an account?' />
				<Link className='user-forgets' to='/password-reset' children='Forgot your password?' />
			</StyledLoginPage>
		</Page>
	);
}

export default LoginPage;
