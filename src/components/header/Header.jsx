import Button from 'components/shared/Button';
import Logo from 'components/logo/Logo';
import LogoIcon from 'components/logo/LogoIcon';

import { Container } from '../../globalStyles';
import { StyledHeader, StyledNav } from './Header.styled';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Header() {
	return (
		<Container header>
			<StyledHeader>
				<Logo strokeWidth={3} height={50} />
				<StyledNav>
					<Button>
						<a title='Website' href='https://zaniac.io/' target='_blank' rel='noopener noreferrer'>
							<LogoIcon />
						</a>
					</Button>
					<Button>
						<a
							title='GitHub Profile'
							href='https://github.com/ZaneBuckner/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithubSquare />
						</a>
					</Button>
					<Button>
						<a
							title='LinkedIn Profile'
							href='https://www.linkedin.com/in/ZaneBuckner/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedin />
						</a>
					</Button>
				</StyledNav>
			</StyledHeader>
		</Container>
	);
}

export default Header;
