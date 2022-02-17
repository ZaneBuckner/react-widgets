import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { getFormattedDate } from 'utils/util';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';
import { UserAvatar } from 'components/shared/Avatar';

import { IoFlag as FlagIcon } from 'react-icons/io5';

export default function ProfilePage() {
	const { currentUser, onLogout } = useAuthContext();

	const { day, month, year } = getFormattedDate(parseInt(currentUser.metadata.createdAt));

	return (
		<Page>
			<StyledProfileHeader>
				<UserAvatar size='medium' src={currentUser.photoURL} />
				<h1 className='title'>{currentUser.displayName}</h1>
				<div className='account-age-wrapper'>
					<FlagIcon className='icon' />
					<p>{`${month} ${day}, ${year}`}</p>
				</div>
			</StyledProfileHeader>

			<StyledBody className='body'>
				<p>Email: {currentUser.email}</p>
				<p>UniqueID: {currentUser.uid}</p>
			</StyledBody>
			<div className='links'>
				<Link
					className='link'
					to='/profile-update'
					children={<Button animate size='large' text='Update' />}
				/>
			</div>
			<div className='footer'>
				<Link className='link' to='/' children='LOG OUT' onClick={onLogout} />
			</div>
		</Page>
	);
}

const StyledProfileHeader = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	.icon {
		margin-right: 0.5rem;
	}

	.account-age-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const StyledBody = styled.div`
	grid-area: 2 / 1 / 4 / 2;
	width: 100%;
`;
