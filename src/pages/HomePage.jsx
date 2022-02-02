import { Link } from 'react-router-dom';

import Page from './Page';
import Button from 'components/shared/Button';
import { StyledHomePage } from './Pages.Styled';

function HomePage() {
	return (
		<Page>
			<StyledHomePage>
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
			</StyledHomePage>
		</Page>
	);
}

export default HomePage;
