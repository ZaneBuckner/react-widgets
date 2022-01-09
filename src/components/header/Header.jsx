import Button from 'components/shared/Button';
import Logo from 'components/logo/Logo';
import LogoIcon from 'components/logo/LogoIcon';

import { Container } from '../../globalStyles';
import { StyledHeader, StyledNav } from './Header.styled';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const mappedNavLinks = () => {
	const links = [
		{
			title: 'Website',
			url: 'https://zaniac.io/',
			icon: <LogoIcon />,
		},
		{
			title: 'GitHub Profile',
			url: 'https://github.com/ZaneBuckner/',
			icon: <FaGithubSquare />,
		},
		{
			title: 'LinkedIn Profile',
			url: 'https://www.linkedin.com/in/ZaneBuckner/',
			icon: <FaLinkedin />,
		},
	];

	return links.map(link => (
		<Button>
			<a title={link.title} href={link.url} target='_blank' rel='noopener noreferrer'>
				{link.icon}
			</a>
		</Button>
	));
};

function Header() {
	return (
		<Container header>
			<StyledHeader>
				<Logo strokeWidth={3} height={50} />
				<StyledNav>{mappedNavLinks()}</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
