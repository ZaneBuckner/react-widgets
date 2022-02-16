import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';

export default function HomePage() {
	return (
		<Page>
			<h1 className='title'>React Widgets</h1>
			<StyledMessage className='body'>
				<p>
					React is a popular open source technology developed by Facebook to build complex user
					interfaces. To practice using this technology, I built an application full of small
					applications - widgets.
				</p>
			</StyledMessage>
			<StyledLinks className='links'>
				<Link to='/login' children={<Button animate size='large' text='Sign In' />} />
				<Link to='/register' children={<Button animate size='auto' text='Create Account' />} />
			</StyledLinks>
			<div className='footer'>
				Not interested?&nbsp;
				<Link className='link' to='/widgets' children='Continue to widgets' />
			</div>
		</Page>
	);
}

const StyledMessage = styled.div`
	grid-area: 2 / 1 / 4 / 2;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 90%;

	p {
		line-height: 2;
	}
`;

const StyledLinks = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;

	@media only screen and (max-width: 500px) {
		flex-direction: column;
		font-size: 90%;

		a {
			margin: 1rem 0;
		}
	}
`;
