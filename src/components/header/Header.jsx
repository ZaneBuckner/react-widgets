import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import Button from 'components/shared/Button';
import { UserAvatar } from 'components/shared/Avatar';
import { StyledHeaderContainer, StyledHeader, StyledNav } from './Header.styled';

import Logo from 'Assets/Logo';
import { MdDashboard as WidgetsIcon } from 'react-icons/md';
import {
	FaHome as HomeIcon,
	FaSignInAlt as SignInIcon,
	FaSignOutAlt as LogOutIcon,
} from 'react-icons/fa';

export default function Header() {
	const { currentUser, onLogout } = useAuthContext();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await onLogout();
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	const signedInLinks = (
		<>
			<Link to='/profile' title='Profile'>
				<Button animate size='small' icon={<UserAvatar src={currentUser?.photoURL} />} />
			</Link>
			<Button animate size='small' icon={<LogOutIcon />} onClick={handleLogout} title='Log Out' />
		</>
	);

	const signedOutLinks = (
		<>
			<Link to='/' title='Home'>
				<Button animate size='small' icon={<HomeIcon />} />
			</Link>
			<Link to='/login' title='Sign In'>
				<Button animate size='small' icon={<SignInIcon />} />
			</Link>
		</>
	);

	return (
		<StyledHeaderContainer>
			<StyledHeader>
				<Logo strokeWidth={3} height={50} />
				<StyledNav>
					<Link to='/widgets' title='Widgets'>
						<Button animate size='small' icon={<WidgetsIcon />} />
					</Link>
					{currentUser ? signedInLinks : signedOutLinks}
				</StyledNav>
			</StyledHeader>
		</StyledHeaderContainer>
	);
}
