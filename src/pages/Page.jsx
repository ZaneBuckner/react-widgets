import styled from 'styled-components';

import CardAnimation from 'components/shared/CardAnimation';

const StyledContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	height: auto;
	margin: auto;
	padding: 0 50px;

	@media only screen and (max-width: 550px) {
		padding: 0 25px;
	}
`;

const StyledCard = styled.div`
	width: 100%;
	height: auto;
	padding: 3rem;

	background-color: #353535;
	border-radius: 10px;
	box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.57);

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	@media only screen and (max-width: 550px) {
		padding: 1.5rem;
	}
`;

function Page({ children }) {
	return (
		<StyledContainer>
			<CardAnimation>
				<StyledCard>{children}</StyledCard>
			</CardAnimation>
		</StyledContainer>
	);
}

export default Page;
