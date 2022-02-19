import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { getFormattedDate } from 'utils/util';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';
import { UserAvatar } from 'components/shared/Avatar';

import { MdOutlineEmail as EmailIcon } from 'react-icons/md';
import { IoFlag as FlagIcon } from 'react-icons/io5';
import { TiLocationArrow as LocationIcon } from 'react-icons/ti';
import { BiUserCircle as UserIcon } from 'react-icons/bi';

export default function ProfilePage() {
	const { userData, currentUser, onLogout } = useAuthContext();
	const [userLocation, setUserLocation] = useState('');

	const { day, month, year } = getFormattedDate(parseInt(currentUser.metadata.createdAt));

	useEffect(() => {
		userData?.location && setUserLocation(`${userData.location.city}, ${userData.location.state}`);
	}, [userData]);

	const ProfileItem = ({ icon, value, ...props }) => {
		return (
			<StyledProfileItem {...props}>
				{icon}
				<div>{value}</div>
			</StyledProfileItem>
		);
	};

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
				<ProfileItem icon={<EmailIcon />} value={currentUser.email} />
				<ProfileItem icon={<LocationIcon />} value={userLocation || 'Update Location'} />
				<ProfileItem icon={<UserIcon />} value={currentUser.uid} />
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

	display: grid;
	grid-template-rows: repeat(3, auto);
	grid-template-columns: auto;
	grid-row-gap: 1rem;
	place-items: center;
	margin: 1rem 0;
	width: 100%;
`;

const StyledProfileItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 3rem;

	svg {
		width: 2rem;
		height: auto;
		margin-right: 1rem;

		opacity: 60%;
	}

	div {
		display: flex;
		align-items: flex-start;
		width: 24rem;
		max-width: 100%;
		height: 100%;
		padding: 0.5rem 1rem;

		font-size: 1.2rem;
		font-size: auto;
		font-weight: 400;

		background-color: #262626;
		border-radius: 25px;

		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;

		/* HIDE SCROLLBAR | KEEP FUNCTIONALITY */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE Edge */
		::-webkit-scrollbar {
			display: none; /* Chrome Safari Opera */
		}

		@media only screen and (max-width: 550px) {
			width: 65vw;
		}
	}
`;
