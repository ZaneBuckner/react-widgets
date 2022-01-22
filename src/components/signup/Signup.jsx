import styled from 'styled-components';

import { Container } from 'globalStyles';
import Card from 'components/shared/Card';
import CardAnimation from 'components/shared/CardAnimation';

const StyledSignupModal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	font-family: 'Roboto', serif;
	color: #c3c3c3;
`;

function SignupModal() {
	return (
		<Container>
			<CardAnimation>
				<Card>
					<StyledSignupModal>
						<h1>Signup</h1>
					</StyledSignupModal>
				</Card>
			</CardAnimation>
		</Container>
	);
}

export default SignupModal;
