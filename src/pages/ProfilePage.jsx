import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { getFormatedDate } from 'utils/util';

import Page from './Page';
import Button from 'components/shared/Button';
import { StyledProfilePage } from './Pages.Styled';

function ProfilePage() {
	const { currentUser } = useAuthContext();

	const memberSince = getFormatedDate(currentUser.metadata.createdAt).split(' @')[0];

	return (
		<Page>
			<StyledProfilePage>
				<h1>Profile Page</h1>
				<h2>{currentUser.email}</h2>
				<h2>Member Since: {memberSince}</h2>
				<Button
					animate
					className='profile-update-btn'
					children={<Link to='/profile-update' children='Update Profile' />}
				/>
			</StyledProfilePage>
		</Page>
	);
}

export default ProfilePage;
