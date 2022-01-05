import { Container } from '../../globalStyles';
import { StyledHeader } from './Header.styled';
import Logo from '../logo/Logo';
import Navigation from './Nav';

function Header() {
	return (
		<Container header>
			<StyledHeader>
				<Logo strokeWidth={3} height={50} />
				<Navigation />
			</StyledHeader>
		</Container>
	);
}

export default Header;
