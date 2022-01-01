import LogoIcon from '../logo/LogoIcon';
import Button from '../shared/Button';
import { Nav, NavLink } from './Header.styled';

import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const iconStyles = {
	fontSize: '1.5rem',
	color: '#DAB55D',
};

const urls = {
	landingPage: 'https://zaniac.io/',
	githubProfile: 'https://github.com/ZaneBuckner/',
	linkedInProfile: 'https://www.linkedin.com/in/ZaneBuckner/',
};

// const navItems = [
//   {
//     title: '',
//     href: '',
//   }
// ];

function Navigation() {
	return (
		<Nav>
			<Button>
				<NavLink title='Personal Landing Page' href={urls.landingPage} target='_blank' rel='noopener noreferrer'>
					<LogoIcon height='20' fill='#DAB55D' />
				</NavLink>
			</Button>
			<Button>
				<NavLink title='GitHub Profile' href={urls.githubProfile} target='_blank' rel='noopener noreferrer'>
					<FaGithubSquare style={iconStyles} />
				</NavLink>
			</Button>
			<Button>
				<NavLink title='LinkedIn Profile' href={urls.linkedInProfile} target='_blank' rel='noopener noreferrer'>
					<FaLinkedin style={iconStyles} />
				</NavLink>
			</Button>
		</Nav>
	);
}

export default Navigation;
