import { Link } from 'react-router-dom';

import Button from 'components/shared/Button';
import Logo from 'components/logo/Logo';
import LogoIcon from 'components/logo/LogoIcon';

import { Container } from '../../globalStyles';
import { StyledHeader, StyledNav } from './Header.styled';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
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
						<a title='Website' href='https://zaniac.io/' target='_blank' rel='noopener noreferrer'>
							<LogoIcon />
						</a>
					</Button>
					<Button animate>
						<a
							title='GitHub Profile'
							href='https://github.com/ZaneBuckner/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithubSquare />
						</a>
					</Button>
					<Button animate>
						<a
							title='LinkedIn Profile'
							href='https://www.linkedin.com/in/ZaneBuckner/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedin />
						</a>
					</Button>
					<Button animate>
						<Link to='/widgets-dashboard'>
							<WidgetsDashboardIcon />
						</Link>
					</Button>
					<Button animate>
						<Link to='/signup'>
							<UserIcon />
						</Link>
					</Button>
				</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
