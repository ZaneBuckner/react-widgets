import RouteLink from 'components/shared/RouteLink';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';

import Button from 'components/shared/Button';
import { StyledHomePage } from './Pages.Styled';

function HomePage() {
	return (
		<Container centerJustify>
			<CardAnimation>
				<Card pages>
					<StyledHomePage className='StyledHomePage'>
						<h1 className='title'>Welcome To React Widgets</h1>
						<p className='message'>
							React is a popular open source technology developed by Facebook to build complex user
							interfaces. To practice using this technology I built an application full of small
							applications - widgets.
						</p>
						<div className='links'>
							<RouteLink to='/login' children={<Button>Sign In</Button>} />
							<RouteLink to='/register' children={<Button>Create Account</Button>} />
						</div>
						<div className='redirect'>
							Not interested?
							<RouteLink className='link' to='/widgets-dashboard' children=' Continue' />
						</div>
					</StyledHomePage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default HomePage;
