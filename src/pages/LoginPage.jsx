import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { formatErrorCode } from 'utils/util';

import Page from './Page';
import Button from 'components/shared/Button';
import UserAlert from 'components/shared/UserAlerts';
import InputField from 'components/shared/InputField';

import { StyledLoginForm } from './Pages.Styled';
import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

export default function LoginPage() {
	const navigate = useNavigate();
	const { onLogin } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const mounted = useRef(false);

	// FORM VALUES
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// ERROR VALUES
	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const resetErrors = () => [setError(''), setEmailError(''), setPasswordError('')];
	const resetValues = () => [setEmail(''), setPassword('')];

	const handleSubmit = async e => {
		e.preventDefault();
		resetErrors();

		if (!email) setEmailError('Please enter an email address.');
		if (!password) setPasswordError('Please enter a password.');

		if (!emailError && !passwordError) {
			try {
				setLoading(true);
				await onLogin(email, password);
				navigate('/profile');
			} catch (err) {
				setError(`Error: ${formatErrorCode(err.code)}`);
				resetValues();
				setLoading(false);
			} finally {
				// TOGGLE LOADING STATE IF COMPONENT IS MOUNTED => AVOID MEMORY LEAK
				mounted.current && setLoading(false);
			}
		}
	};

	useEffect(() => {
		mounted.current = true;
		return (mounted.current = false);
	}, []);

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
					error={emailError ? true : false}
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
					error={passwordError ? true : false}
					helperText={passwordError}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button
					animate
					type='submit'
					size='large'
					text='Log In'
					onClick={handleSubmit}
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
