import { useState, useEffect } from 'react';
import Card from '../../shared/Card';
import { StyledUser } from './User.styled';
import Button from '../../shared/Button';

import { Avatar } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import PersonIcon from '@material-ui/icons/Person';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function User() {
	const [user, setUser] = useState(null);

	useEffect(() => fetchUser(), []);

	async function fetchUser() {
		const response = await fetch('https://randomuser.me/api/');
		const data = await response.json();
		const item = data.results[0];
		setUser({
			name: `${item.name.title} ${item.name.first} ${item.name.last}`,
			image: item.picture.medium,
			location: `${item.location.city}, ${item.location.country}`,
			email: item.email,
		});
	}

	const styledAvatar = {
		width: '7rem',
		height: '7rem',
	};

	return (
		<Card>
			<StyledUser>
				{user && <Avatar style={styledAvatar} src={user.image} />}
				<div className='user-details'>
					<div>
						<PersonIcon />
						{user && <h2>{user.name}</h2>}
					</div>
					<div>
						<DraftsIcon />
						{user && <h2>{user.email}</h2>}
					</div>
					<div>
						<LocationOnOutlinedIcon />
						{user && <h2>{user.location}</h2>}
					</div>
					<Button className='newUserBtn' onClick={() => fetchUser()}>
						<AutorenewIcon className='newUserIcon' />
					</Button>
				</div>
			</StyledUser>
		</Card>
	);
}

export default User;
