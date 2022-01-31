import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';

import Button from 'components/shared/Button';
import { StyledHomePage } from './Pages.Styled';
import ProfilePage from './ProfilePage';

function HomePage() {
	const { currentUser } = useAuthContext();

	const HomePage = (
		<>
			<h1 className='title'>Welcome To React Widgets</h1>
			<p className='message'>
				React is a popular open source technology developed by Facebook to build complex user
				interfaces. To practice using this technology, I built an application full of small
				applications - widgets.
			</p>
			<div className='links'>
				<Link to='/login' children={<Button animate>Sign In</Button>} />
				<Link to='/register' children={<Button animate>Create Account</Button>} />
			</div>
			<div className='redirect'>
				Not interested?
				<Link className='link' to='/widgets-dashboard' children=' Continue' />
			</div>
		</>
	);

	if (currentUser) return <ProfilePage />;
	return (
		<Container centerJustify>
			<CardAnimation>
				<Card pages>
					<StyledHomePage className='StyledHomePage'>
						{currentUser ? <ProfilePage /> : <HomePage />}
					</StyledHomePage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default HomePage;
