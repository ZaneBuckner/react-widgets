import styled from 'styled-components';

export const StyledDashboard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 10rem;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	img {
		width: auto;
		height: 7rem;
	}
`;

export const StyledUserProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100%;

	.user-header {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;

		h1 {
			font-size: 1.2rem;
			font-weight: 300;
		}

		div {
			margin-left: auto;
		}
	}

	.item {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		width: 100%;

		h2 {
			font-size: 0.9rem;
			opacity: 70%;
		}

		p {
			font-size: 1rem;
			font-weight: 400;
		}
	}
`;

export const StyledChallengesCompleted = styled.ul`
	display: flex;
	flex-direction: column;
	max-height: 10rem;
	overflow: scroll;
	width: 30%;

	li {
		font-size: 0.8rem;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		user-select: none;

		&:hover {
			cursor: pointer;
			color: #b03226;
		}
	}
`;

export const StyledChallengeDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 30%;
	height: 100%;

	h1 {
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
		line-height: 1.1rem;
	}
`;
