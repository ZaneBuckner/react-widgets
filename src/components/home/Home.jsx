import styled from 'styled-components';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';

const StyledHome = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	font-family: 'Roboto', serif;
	color: #c3c3c3;
`;

function Home() {
	return (
		<Container>
			<CardAnimation>
				<Card>
					<StyledHome>
						<h1>Home Page</h1>
					</StyledHome>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default Home;
