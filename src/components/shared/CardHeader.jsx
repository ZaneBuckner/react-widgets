import styled from 'styled-components';

const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 1.3rem;
	margin-bottom: 0.5rem;

	font-family: 'Roboto', serif;
	opacity: 70%;

	svg {
		width: auto;
		height: 100%;
		fill: #dab55d;
	}

	h1 {
		margin-left: 0.5rem;
		font-size: 0.8rem;
		font-weight: 400;
		color: #dab55d;
	}

	input {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.5rem;
		margin-left: auto;

		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 5px;

		font-family: 'Roboto', serif;
		color: #c3c3c3;

		::placeholder {
			font: inherit;
			color: #c3c3c3;
			opacity: 80%;
		}
	}

	.header-icon {
		height: 100%;
		margin-left: 0.3rem;
		cursor: pointer;
	}
`;

function CardHeader({ widgetName, icon, children }) {
	return (
		<StyledCardHeader>
			{icon}
			<h1>{widgetName}</h1>
			{children}
		</StyledCardHeader>
	);
}

export default CardHeader;
