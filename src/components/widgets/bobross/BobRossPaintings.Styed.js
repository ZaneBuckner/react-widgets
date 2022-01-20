import styled from 'styled-components';

export const StyledBobRossPaintings = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 20rem;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.painting-wrapper {
		position: relative;
		width: 100%;
		height: auto;
		background-repeat: no-repeat;
		background-size: contain;

		.painting-frame {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		.painting-image {
			width: 100%;
			height: 100%;
		}
	}
`;
