import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';
import Button from 'components/shared/Button';
import { StyledHomePage, StyledHeader, StyledContent } from './HomePage.Styled';

import {
	BsGoogle as GoogleIcon,
	BsGithub as GitHubIcon,
	BsApple as AppleIcon,
} from 'react-icons/bs';

function HomePage() {
	const getSignInMethods = () => {
		let methods = [
			{
				id: uuidv4(),
				ref: 'google',
				// path: '/widgets-dashboard',
				icon: <GoogleIcon />,
			},
			{
				id: uuidv4(),
				ref: 'github',
				// path: '/login',
				icon: <GitHubIcon />,
			},
			{
				id: uuidv4(),
				ref: 'apple',
				// path: '/signin',
				icon: <AppleIcon />,
			},
		];

		return methods.map(method => (
			<Button animate key={method.id}>
				{method.icon}
			</Button>
		));
	};

	const redirectMessage = (
		<div className='redirect'>
			Not interested?
			<Link to='/widgets-dashboard'>
				<span> Continue to dashboard</span>
			</Link>
		</div>
	);

	return (
		<Container centerJustify>
			<CardAnimation>
				<Card>
					<StyledHomePage>
						<StyledHeader>
							<h1 className='title'>Welcome To React Widgets</h1>
							<p className='message'>
								React is a popular open source technology developed by Facebook to build complex
								user interfaces. To practice using this technology I built an application full of
								small applications - widgets.
							</p>
							<div className='links'>
								<Button>Sign In</Button>
								<Button>Create Account</Button>
							</div>
						</StyledHeader>

						<StyledContent>
							<div className='signin-methods'>
								{getSignInMethods()}
								<h2>Sign in with another account</h2>
							</div>
							{redirectMessage}
						</StyledContent>
					</StyledHomePage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default HomePage;