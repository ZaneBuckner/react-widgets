import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Logo from 'Assets/Logo';
import LogoIcon from 'Assets/LogoIcon';
import Button from 'components/shared/Button';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import {
	StyledFooterContainer,
	StyledFooterWrapper,
	StyledSiteLinks,
	StyledFooterIcons,
} from './Footer.Styled';

function Footer() {
	const getSiteLinks = () => {
		const links = [
			{
				id: uuidv4(),
				path: '/',
				text: 'Home',
			},
			{
				id: uuidv4(),
				path: '/widgets-dashboard',
				text: 'Widgets',
			},
			{
				id: uuidv4(),
				path: '/login',
				text: 'Sign In',
			},
			{
				id: uuidv4(),
				path: '/register',
				text: 'Join',
			},
		];

		return links.map(link => (
			<Link to={link.path} key={link.id}>
				<h3 className='site-links'>{link.text}</h3>
			</Link>
		));
	};

	const getFooterIcons = () => {
		const icons = [
			{
				id: uuidv4(),
				title: "Developer's Website",
				href: 'https://zaniac.io/',
				icon: <LogoIcon />,
			},
			{
				id: uuidv4(),
				title: 'Github Profile',
				href: 'https://github.com/ZaneBuckner/',
				icon: <FaGithubSquare />,
			},
			{
				id: uuidv4(),
				title: 'LinkedIn Profile',
				href: 'https://www.linkedin.com/in/ZaneBuckner/',
				icon: <FaLinkedin />,
			},
		];

		return icons.map(icon => (
			<Button animate key={icon.id}>
				<a title={icon.title} href={icon.href} target='_blank' rel='noopener noreferrer'>
					{icon.icon}
				</a>
			</Button>
		));
	};

	return (
		<StyledFooterContainer>
			<StyledFooterWrapper>
				<StyledSiteLinks>
					<div className='header'>
						<Logo strokeWidth={3} height={50} />
						<h1 className='site-title'>React Widgets</h1>
					</div>
					{getSiteLinks()}
				</StyledSiteLinks>
				<StyledFooterIcons>{getFooterIcons()}</StyledFooterIcons>
			</StyledFooterWrapper>
		</StyledFooterContainer>
	);
}

export default Footer;
