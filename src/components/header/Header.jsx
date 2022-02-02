import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import { Container } from 'globalStyles';
import Button from 'components/shared/Button';
import { StyledHeader, StyledNav } from './Header.styled';

import Logo from 'Assets/Logo';
import { MdDashboard as DashboardIcon } from 'react-icons/md';
import {
	FaHome as HomeIcon,
	FaUserCircle as ProfileIcon,
	FaSignInAlt as SignInIcon,
	FaSignOutAlt as LogOutIcon,
} from 'react-icons/fa';

function Header() {
	const { currentUser, onLogout } = useAuthContext();
	const [navLinks, setNavLinks] = useState();
	const [error, setError] = useState();
	const navigate = useNavigate();

	const handleLogout = async () => {
		setError('');

		try {
			await onLogout();
		} catch {
			setError('Failed to log out.');
			error && console.log(error);
		} finally {
			navigate('/');
		}
	};

	useEffect(() => {
		const linksRef = {
			widgets: {
				title: 'Widgets',
				path: '/widgets-dashboard',
				icon: <DashboardIcon />,
				clickEvent: null,
			},
			home: {
				title: 'Home',
				path: '/',
				icon: <HomeIcon />,
				clickEvent: null,
			},
			signin: {
				title: 'Sign In',
				path: '/login',
				icon: <SignInIcon />,
				clickEvent: null,
			},
			profile: {
				title: 'Profile',
				path: '/profile',
				icon: <ProfileIcon />,
				clickEvent: null,
			},
			logout: {
				title: 'Log Out',
				path: '/',
				icon: <LogOutIcon />,
				clickEvent: handleLogout,
			},
		};

		// () => onLogout()

		const getNavLinks = () => {
			let links = currentUser
				? [linksRef.widgets, linksRef.profile, linksRef.logout]
				: [linksRef.widgets, linksRef.home, linksRef.signin];

			return links.map(link => (
				<Button animate key={uuidv4()} onClick={link.clickEvent}>
					<Link title={link.title} to={link.path} children={link.icon} />
				</Button>
			));
		};

		setNavLinks(getNavLinks());
	}, [currentUser, onLogout]);

	return (
		<Container header>
			<StyledHeader>
				<Link to='/' children={<Logo strokeWidth={3} height={50} />} />
				<StyledNav>{navLinks}</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
