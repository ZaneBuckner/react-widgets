import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';

export default function ProfilePage() {
	const { currentUser, onLogout } = useAuthContext();

	const [day, month, year] = currentUser.metadata.creationTime.split(' ').slice(1, 4);

	return (
		<Page>
			<h1 className='title'>Profile Page</h1>
			<StyledBody className='body'>
				<h2>{currentUser.email}</h2>
				<h2>{`Member Since: ${month} ${day}, ${year}`}</h2>
			</StyledBody>
			<div className='links'>
				<Link
					className='button-link'
					to='/profile-update'
					children={<Button animate children='UPDATE' />}
				/>
			</div>
			<div className='footer'>
				<Link className='link' to='/' children='LOG OUT' onClick={onLogout} />
			</div>
		</Page>
	);
}

const StyledBody = styled.div`
	grid-area: 2 / 1 / 4 / 2;
	width: 100%;
`;
