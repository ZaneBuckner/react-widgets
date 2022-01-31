import { useAuthContext } from 'context/AuthContext';
import { getFormatedDate } from 'utils/util';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';
import Button from 'components/shared/Button';

import { StyledProfilePage } from './Pages.Styled';

function ProfilePage() {
	const { currentUser } = useAuthContext();

	const memberSince = getFormatedDate(currentUser.metadata.createdAt).split(' @')[0];

	return (
		<Container centerJustify>
			<CardAnimation>
				<Card page>
					<StyledProfilePage>
						<h1>Profile Page</h1>
						<h2>{currentUser.email}</h2>
						<h2>Member Since: {memberSince}</h2>
					</StyledProfilePage>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default ProfilePage;
