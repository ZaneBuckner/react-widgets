import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Page({ children }) {
	return (
		<PageConatiner>
			<PageWrapper>
				<StyledPage>{children}</StyledPage>
			</PageWrapper>
		</PageConatiner>
	);
}

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

const PageConatiner = styled.div`
	width: 90%;
	margin: auto;
`;

const PageWrapper = styled.div`
	width: 100%;
	max-width: 700px;
	margin: 2rem auto;

	background-color: #353535;
	border-radius: 10px;
	box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.57);
`;

const StyledPage = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, auto);
	grid-row-gap: 1rem;
	place-items: center;

	width: 100%;
	height: 100%;
	padding: 2rem;
	margin: 0 auto;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.icon,
	.link {
		color: #dab55d;
	}

	.title {
		font-size: 2rem;
		font-weight: 300;
		color: #dab55d;
	}

	.body {
		width: 100%;
		height: 100%;
	}

	.links {
		grid-area: 4 / 1 / 5 / 2;
	}

	.footer {
		grid-area: 5 / 1 / 6 / 2;

		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 450px) {
		padding: 1rem;
	}
`;
