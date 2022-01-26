import styled from 'styled-components';

export const StyledBobRossPaintings = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20rem;
`;

export const StyledPainting = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	max-height: 19rem;
	background-repeat: no-repeat;
	background-size: contain;

	@media only screen and (max-width: 600px) {
		max-width: 25rem;
	}

	.painting-frame {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.painting-image {
		width: 100%;
		height: 100%;
	}

	.alt-display {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
		background: #363636;
	}
`;
