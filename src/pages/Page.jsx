import styled from 'styled-components';

import CardAnimation from 'components/shared/CardAnimation';

const StyledContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: auto;
	padding: 0 50px;
`;

const StyledPagesCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 3rem;

	background-color: #353535;
	border-radius: 10px;
	box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.57);
`;

function Page({ children }) {
	return (
		<StyledContainer>
			<CardAnimation>
				<StyledPagesCard>{children}</StyledPagesCard>
			</CardAnimation>
		</StyledContainer>
	);
}

export default Page;
