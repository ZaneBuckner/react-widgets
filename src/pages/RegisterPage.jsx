import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Page from './Page';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';

import { StyledRegisterPage, StyledRegisterForm } from './Pages.Styled';
import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

function RegisterPage() {
	const { currentUser, onRegister } = useAuthContext();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmitClick = async e => {
		e.preventDefault();

		setEmailError(false);
		setPasswordError(false);
		email || setEmailError('Please enter an email address.');
		password || setPasswordError('Please enter a password.');
		password !== passwordConfirm && setPasswordError('Passwords do not match.');
		password.length < 6 && setPasswordError('Passwords must be at least 6 characters.');

		try {
			setError('');
			setLoading(true);
			await onRegister(email, password);
		} catch {
			setError('Failed to create account');
			console.log(error);
		} finally {
			setLoading(false);
			setEmail('');
			setPassword('');
			setPasswordConfirm('');
			navigate('/');
		}
	};

	return (
		<Page>
			<StyledRegisterPage>
				<h1>Create Account</h1>
				{currentUser && <h2>{currentUser.email}</h2>}
				<StyledRegisterForm>
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
					<InputField
						required
						type='password'
						label='Confirm Password'
						icon={<PasswordIcon />}
						value={passwordConfirm}
						autoComplete='new-password'
						error={passwordError}
						helperText={passwordError}
						onChange={e => setPasswordConfirm(e.target.value)}
					/>
					<Button
						type='submit'
						className='submit-btn'
						children='Join'
						onClick={handleSubmitClick}
						disabled={loading}
					/>
				</StyledRegisterForm>
			</StyledRegisterPage>
		</Page>
	);
}

export default RegisterPage;
