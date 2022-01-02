import styled from 'styled-components';

const testBorder = (color = '#add8e64f') => `border: 0.1px solid ${color}`;
const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;
const colors = {
	light: '#DFC780',
	medium: '#DAB55D',
	dark: '#B69037',
	veryDark: '#AA8733',
	grey: '#B3B3B3',
};

export const StyledWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;

	font-family: 'Roboto', serif;
	color: '#C3C3C3';

	.sun {
		${flexCenter};
	}
`;

// export const StyledWeather = styled.div`
// 	width: 100%;
// 	height: auto;

/* .city {
		font-family: 'Lato', serif;
		font-size: 1rem;
		color: #b3b3b3;
	} */

/* img {
		height: 4rem;
	} */

/* display: flex;
	flex-direction: column;
	align-items: center;
	width: 15rem;
	min-height: 20rem;
	padding: 1rem;
	border-radius: 5px;

	background: radial-gradient(#3ed6e0, #3a92e2);
	font-family: 'Karla';
	font-size: 0.9rem;
	font-weight: 500;

	.search-box {
		width: 100%;
		margin-bottom: 1rem;

		.search-bar {
			padding: 0.3rem;
			width: 100%;

			appearance: none;
			background: #ffffff36;
			border: none;
			border-radius: 5px;
			outline: none;
			/* border-radius: 5px; */
/* font: inherit;
			color: #000;
			transition: 0.4s ease;

			&:hover {
				background: #ffffff7a;
			}
		}
	} */

/* img {
		width: 4rem;
		height: 2rem;
		border: 1px solid magenta;
	}

	.location {
		font-weight: 700;
		font-size: 1.5rem;
		text-shadow: 2px 2px #707070;
	}

	.weather-details {
		display: flex;
		flex-direction: column;
		align-items: center;

		div {
			padding: 0.3rem;
			background: ${transparentBg};
			border-radius: 5px;
			font-size: 3rem;
			text-shadow: 3px 3px #787878;
		}

		.temperature {
		}

		.condition {
		}
	} */
// `;
