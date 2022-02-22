import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { getFormattedDate, fetchUserLocation } from 'utils/util';
import { updateUserDocument } from 'context/FirebaseFirestore';
import styled from 'styled-components';

import Page from './Page';
import Button from 'components/shared/Button';
import { UserAvatar } from 'components/shared/Avatar';

import { IoIosMail as EmailIcon } from 'react-icons/io';
import { IoLocationSharp as LocationIcon } from 'react-icons/io5';
import { MdMyLocation as GetLocationIcon } from 'react-icons/md';
import { CodewarsIcon } from 'Assets/WidgetIcons';

export default function ProfilePage() {
	const { userData, currentUser, onLogout } = useAuthContext();
	const [userEst, setUserEst] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userLocation, setUserLocation] = useState('');
	const [userCodewars, setUserCodewars] = useState('');

	const [fetchedLocation, setFetchedLocation] = useState('');

	const handleLocationFetch = async () => {
		await fetchUserLocation(setFetchedLocation);
	};

	// UPDATE USER DOCUMENT ON AWAIT FETCHED LOCATION VALUE
	useEffect(() => {
		fetchedLocation && updateUserDocument(currentUser, { location: fetchedLocation });
	}, [currentUser, fetchedLocation]);

	// UPDATE INITIAL STATE VALUES TO POPULATE PROFILE ITEMS
	useEffect(() => {
		const { day, month, year } = getFormattedDate(parseInt(currentUser.metadata.createdAt));

		if (userData) {
			const formattedLocation = `${userData?.location.city}, ${userData?.location.state}`;
			setUserEst(`${month} ${day}, ${year}`);
			setUserEmail(userData.email);
			setUserCodewars(userData?.codewarsUsername);
			setUserLocation(userData.location ? formattedLocation : '');
		}
	}, [currentUser, userData]);

	const ProfileItem = ({ icon, value, placeholder, endAdornment }) => {
		return (
			<StyledProfileItem placeholder={placeholder}>
				<div className='icon-wrapper'>{icon}</div>
				<div className='value-wrapper'>
					{value ? <p className='value'>{value}</p> : <p className='placeholder'>{placeholder}</p>}
					{endAdornment}
				</div>
			</StyledProfileItem>
		);
	};

	return (
		<Page>
			<StyledProfileHeader>
				<UserAvatar size='medium' src={currentUser.photoURL} />
				<h1 className='title'>{currentUser.displayName}</h1>
				<div className='account-age-wrapper'>
					<h3>Est.</h3>
					<p>{userEst}</p>
				</div>
			</StyledProfileHeader>

			<StyledBody className='body'>
				<ProfileItem icon={<EmailIcon />} value={userEmail} />
				<ProfileItem
					icon={<LocationIcon />}
					value={userLocation}
					placeholder='No Location Saved'
					endAdornment={<GetLocationIcon className='end-adornment' onClick={handleLocationFetch} />}
				/>
				<ProfileItem icon={<CodewarsIcon />} value={userCodewars} placeholder='No Username Saved' />
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

	.account-age-wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-column-gap: 0.5rem;
		place-items: center;

		h3 {
			font-size: 1rem;
			font-weight: 300;
			color: #dab55d;
		}
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

	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 100%;
		margin-right: 1rem;

		svg {
			width: 100%;
			height: auto;
			fill: #c3c3c3;
			opacity: 60%;
		}
	}

	.value-wrapper {
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

		.placeholder {
			opacity: 60%;
		}

		.end-adornment {
			min-height: 2rem;
			min-width: 2rem;
			margin-left: auto;

			opacity: 70%;
			cursor: pointer;

			&:hover {
				filter: brightness(1.2) saturate(1.1);
			}
		}

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
