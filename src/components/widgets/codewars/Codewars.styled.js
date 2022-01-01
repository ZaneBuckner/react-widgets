import styled from 'styled-components';

const kyu = {
	white: '#E6E6E6',
	yellow: '#ECB614',
	blue: '#3C7EBB',
	purple: '#866CC7',
	background: '#181919',
};

export const CodewarsStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 10rem;

	font-family: 'Karla';
	font-size: 1rem;
	color: #b3b3b3;

	img {
		width: auto;
		height: 7rem;
	}

	.codewars-user {
		border: 1px solid magenta;
		height: 100%;
	}

	.challenges-list {
		border: 1px solid magenta;
		display: flex;
		/* width: 25rem; */
		width: 60%;
		height: 100%;
		line-height: 1.5rem;
		overflow-y: auto;
		cursor: pointer;

		.title {
			cursor: pointer;
		}

		.challenge-item:hover {
			color: #b03226;
		}

		.date-completed {
			width: 2.5rem;
			font-size: 0.6rem;
			opacity: 70%;
			text-transform: uppercase;
		}
	}

	.challenge-details {
		border: 0.1px solid magenta;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 10rem;

		p {
			font-size: 0.8rem;
			line-height: 1rem;
			max-width: 100%;
			overflow-y: scroll;
		}
	}

	/* .hexagon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4em;
		height: 4em;
		margin: 1rem;
		background: ${kyu.yellow};
		clip-path: polygon(15% 25%, 85% 25%, 100% 50%, 85% 75%, 15% 75%, 0 50%);

		font-size: 11.5px;

		::before {
			content: '';
			width: 3em;
			height: 3.5em;
			background: #333333;
			clip-path: polygon(15% 25%, 85% 25%, 100% 50%, 85% 75%, 15% 75%, 0 50%);
		}

		h1 {
			position: absolute;
			font-family: 'Lato';
			font-size: 1em;
			font-weight: 500;
			color: white;
		}
	} */
`;
