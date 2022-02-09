import { Link } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';

import { MdDashboard as WidgetsIcon } from 'react-icons/md';
import { FaHome as HomeIcon, FaUserCircle as ProfileIcon } from 'react-icons/fa';

export default function PageNotFound() {
	const { currentUser } = useAuthContext();

	const homeLink = (
		<Link to='/'>
			<Button animate text='Home' children={<HomeIcon />} />
		</Link>
	);

	const profileLink = (
		<Link to='/profile'>
			<Button animate text='Profile' children={<ProfileIcon />} />
		</Link>
	);

	return (
		<Page>
			<h1 className='title'>404 Page Not Found</h1>
			<StyledWrapper className='links'>
				<Link to='/widgets'>
					<Button animate text='Widgets' children={<WidgetsIcon />} />
				</Link>
				{currentUser ? profileLink : homeLink}
			</StyledWrapper>
		</Page>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	button {
		width: 9rem;
	}

	div {
		margin: 0 1rem;
	}

	@media only screen and (max-width: 400px) {
		flex-direction: column;
		div {
			margin: 1rem 0;
		}
	}
`;
