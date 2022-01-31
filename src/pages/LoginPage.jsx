import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';

import { StyledLoginPage, StyledLoginForm } from './Pages.Styled';
import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

function LoginPage() {
	const { currentUser, onLogin, onPasswordReset } = useAuthContext();
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

		try {
			setError('');
			setLoading(true);
			await onLogin(email, password);
		} catch (err) {
			setError('Failed to create account');
			console.log(err.message);
		} finally {
			setLoading(false);
			setEmail('');
			setPassword('');
			navigate('/');
		}
	};

	return (
		<Container centerJustify>
			<CardAnimation>
				<Card page>
					<StyledLoginPage>
						<h1>Welcome Back</h1>
						{currentUser && <h2>{currentUser.email}</h2>}
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
						<Link className='user-forgets' to='' children='Forgot your password?' />
					</StyledLoginPage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default LoginPage;
