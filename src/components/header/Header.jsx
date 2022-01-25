import { Link } from 'react-router-dom';

import Button from 'components/shared/Button';
import Logo from 'Assets/Logo';

import { Container } from 'globalStyles';
import { StyledHeader, StyledNav } from './Header.styled';
import { FaUserCircle as UserIcon } from 'react-icons/fa';
import { MdDashboard as WidgetsDashboardIcon } from 'react-icons/md';

function Header() {
	return (
		<Container header>
			<StyledHeader>
				<Link to='/'>
					<Logo strokeWidth={3} height={50} />
				</Link>
				<StyledNav>
					<Button animate>
						<Link to='/widgets-dashboard'>
							<WidgetsDashboardIcon />
						</Link>
					</Button>
					<Button animate>
						<Link to='/login'>
							<UserIcon />
						</Link>
					</Button>
				</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
