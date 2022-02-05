import { v4 as uuidv4 } from 'uuid';
import Logo from 'Assets/Logo';
import LogoIcon from 'Assets/LogoIcon';
import Button from 'components/shared/Button';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { StyledContainer, StyledWrapper } from './Footer.Styled';

function Footer() {
	const getFooterIcons = () => {
		const icons = [
			{
				title: 'Website',
				href: 'https://zaniac.io/',
				icon: <LogoIcon height='25px' />,
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
			<a
				key={uuidv4()}
				title={icon.title}
				href={icon.href}
				target='_blank'
				rel='noopener noreferrer'
				children={<Button animate children={icon.icon} />}
				className='button'
			/>
		));
	};

	return (
		<StyledContainer>
			<StyledWrapper>
				<div className='site-title'>
					<Logo strokeWidth={4} />
					<h1>React Widgets</h1>
				</div>
				<div className='buttons-wrapper'>{getFooterIcons()}</div>
			</StyledWrapper>
		</StyledContainer>
	);
}

export default Footer;
