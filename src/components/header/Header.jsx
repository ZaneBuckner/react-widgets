import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import Button from 'components/shared/Button';
import Logo from 'Assets/Logo';

import { Container } from 'globalStyles';
import { StyledHeader, StyledNav } from './Header.styled';
import { FaUserCircle as UserIcon } from 'react-icons/fa';
import { MdDashboard as DashboardIcon } from 'react-icons/md';

function Header() {
	const getNavLinks = () => {
		const links = [
			{
				id: uuidv4(),
				path: '/widgets-dashboard',
				icon: <DashboardIcon />,
			},
			{
				id: uuidv4(),
				path: '/login',
				icon: <UserIcon />,
			},
		];

		return links.map(link => (
			<Button animate key={link.id}>
				<Link to={link.path}>{link.icon}</Link>
			</Button>
		));
	};

	// const isLoggedIn = false;

	return (
		<Container header>
			<StyledHeader>
				<Link to='/'>
					<Logo strokeWidth={3} height={50} />
				</Link>
				<StyledNav>{getNavLinks()}</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
