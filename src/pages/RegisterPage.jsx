import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';
import Button from 'components/shared/Button';
import InputField from 'components/shared/InputField';

import { StyledRegisterPage, StyledRegisterForm } from './Pages.Styled';

import { MdEmail as EmailIcon, MdLock as PasswordIcon } from 'react-icons/md';

function RegisterPage() {
	const { onSignUp } = useAuthContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleUserSubmit = e => {
		// e.preventDefault();
		// if (!email) {
		// 	return alert('Please enter an email.');
		// } else if (!password) {
		// 	return alert('Please enter a password.');
		// }
		// onLogIn(email, password);
		// setEmail('');
		// setPassword('');
	};

	// useEffect(() => {
	// 	if (currentUser) {
	// 		console.log('User logged in', currentUser);
	// 	} else {
	// 		console.log('no user');
	// 	}
	// }, [currentUser]);

	return (
		<Container centerJustify>
			<CardAnimation>
				<Card page>
					<StyledRegisterPage>
						<h1>Create Account</h1>
						<StyledRegisterForm>
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
								type='password'
								title='Password'
								icon={<PasswordIcon />}
								label='Password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								autoComplete='new-password'
							/>
							<InputField
								required
								type='password'
								title='Password'
								icon={<PasswordIcon />}
								label='Confirm Password'
								value={password}
								// onChange={e => setPassword(e.target.value)}
								autoComplete='new-password'
							/>
							<Button type='submit' className='submit-btn' text='Join' onClick={handleUserSubmit} />
						</StyledRegisterForm>
					</StyledRegisterPage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default RegisterPage;
