import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import { Container } from 'globalStyles';
import Button from 'components/shared/Button';
import { StyledHeader, StyledNav } from './Header.styled';

import Logo from 'Assets/Logo';
import { MdDashboard as WidgetsIcon } from 'react-icons/md';
import {
	FaHome as HomeIcon,
	FaUserCircle as ProfileIcon,
	FaSignInAlt as SignInIcon,
	FaSignOutAlt as LogOutIcon,
} from 'react-icons/fa';

function Header() {
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
			<Link to='/widgets' title='Widgets'>
				<Button animate children={<WidgetsIcon />} />
			</Link>
			<Link to='/profile' title='Profile'>
				<Button animate children={<ProfileIcon />} />
			</Link>
			<Button animate onClick={handleLogout} children={<LogOutIcon />} title='Signout' />
		</>
	);

	const signedOutLinks = (
		<>
			<Link to='/widgets' title='Widgets'>
				<Button animate children={<WidgetsIcon />} />
			</Link>
			<Link to='/' title='Home'>
				<Button animate children={<HomeIcon />} />
			</Link>
			<Link to='/login' title='Signin'>
				<Button animate children={<SignInIcon />} />
			</Link>
		</>
	);

	return (
		<Container header>
			<StyledHeader>
				<Logo strokeWidth={3} height={50} />
				<StyledNav>{currentUser ? signedInLinks : signedOutLinks}</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
