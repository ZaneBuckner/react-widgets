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
				path: '/',
				text: 'Home',
			},
			{
				path: '/widgets-dashboard',
				text: 'Widgets',
			},
			{
				path: '/login',
				text: 'Login',
			},
			{
				path: '/signup',
				text: 'Signup',
			},
		];

		return links.map(link => (
			<Link to={link.path}>
				<h3 className='site-links'>{link.text}</h3>
			</Link>
		));
	};

	const getFooterIcons = () => {
		const icons = [
			{
				title: "Developer's Website",
				href: 'https://zaniac.io/',
				icon: <LogoIcon />,
			},
			{
				title: 'Github Profile',
				href: 'https://github.com/ZaneBuckner/',
				icon: <FaGithubSquare />,
			},
			{
				title: 'LinkedIn Profile',
				href: 'https://www.linkedin.com/in/ZaneBuckner/',
				icon: <FaLinkedin />,
			},
		];

		return icons.map(icon => (
			<Button animate>
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
