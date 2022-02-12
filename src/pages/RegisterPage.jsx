import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { formatErrorCode } from 'utils/util';

import Page from './Page';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';
import UserAlert from 'components/shared/UserAlerts';

import { StyledRegisterForm } from './Pages.Styled';
import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

export default function RegisterPage() {
	const navigate = useNavigate();
	const { onRegister } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const mounted = useRef(false);

	// FORM VALUES
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	// ERROR VALUES
	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const resetErrors = () => [setError(''), setEmailError(''), setPasswordError('')];
	const resetValues = () => [setEmail(''), setPassword(''), setPasswordConfirm('')];

	const handleSubmit = async e => {
		e.preventDefault();

		resetErrors();

		if (!email) {
			return setEmailError('Please enter an email address.');
		}

		if (!password) {
			return setPasswordError('Please enter a password.');
		} else if (password.length < 6) {
			return setPasswordError('Passwords must be at least 6 characters.');
		} else if (password !== passwordConfirm) {
			return setPasswordError('Passwords do not match.');
		}

		try {
			setLoading(true);
			await onRegister(email, password);
			navigate('/profile');
		} catch (err) {
			setError(`Error: ${formatErrorCode(err.code)}`);
			resetValues();
			setLoading(false);
		} finally {
			// TOGGLE LOADING STATE IF COMPONENT IS MOUNTED => AVOID MEMORY LEAK
			mounted.current && setLoading(false);
		}
	};

	useEffect(() => {
		mounted.current = true;
		return (mounted.current = false);
	}, []);

	return (
		<Page>
			<h1 className='title'>Create Account</h1>
			<div className='user-messages'>{error && <UserAlert variant='error' message={error} />}</div>
			<StyledRegisterForm className='body'>
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
				<InputField
					required
					type='password'
					label='Confirm Password'
					icon={<PasswordIcon />}
					value={passwordConfirm}
					autoComplete='new-password'
					error={passwordError ? true : false}
					helperText={passwordError}
					onChange={e => setPasswordConfirm(e.target.value)}
				/>
				<Button
					animate
					type='submit'
					className='submit-btn'
					children='Join'
					onClick={handleSubmit}
					disabled={loading}
				/>
			</StyledRegisterForm>
			<div className='footer'>
				Already have an account?&nbsp;
				<Link className='link' to='/login' children='LOGIN' />
			</div>
		</Page>
	);
}
