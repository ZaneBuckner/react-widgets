import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';

import { StyledLoginPage, StyledLoginForm } from './Pages.Styled';

import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

function LoginPage() {
	const { currentUser, userForgotPassword, onLogIn } = useAuthContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, updateShowPassword] = useState(false);

	const handleUserSubmit = e => {
		e.preventDefault();

		if (!email) {
			return alert('Please enter an email.');
		} else if (!password) {
			return alert('Please enter a password.');
		}

		onLogIn(email, password);
		setEmail('');
		setPassword('');
	};

	useEffect(() => {
		if (currentUser) {
			console.log('User logged in', currentUser);
		} else {
			console.log('no user');
		}
	}, [currentUser]);

	return (
		<Container centerJustify>
			<CardAnimation>
				<Card page>
					<StyledLoginPage>
						<h1>Welcome Back</h1>
						<StyledLoginForm>
							<InputField
								required
								type='text'
								title='Email'
								label='Email'
								icon={<EmailIcon />}
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<InputField
								required
								showPassword={showPassword}
								updateShowPassword={updateShowPassword}
								type='password'
								title='Password'
								icon={<PasswordIcon />}
								label='Password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								autoComplete='new-password'
							/>
							<Button
								type='submit'
								className='submit-btn'
								text='Log In'
								onClick={handleUserSubmit}
							/>
						</StyledLoginForm>
						<Link className='user-forgets' to=''>
							Forgot your password?
						</Link>
					</StyledLoginPage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default LoginPage;
