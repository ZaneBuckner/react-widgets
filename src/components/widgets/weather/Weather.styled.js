import styled from 'styled-components';

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWeatherModal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 1rem;
	}
`;

export const StyledWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	.user-message {
		width: 100%;
		padding: 0.2rem;

		border: 1px solid #c3c3c380;
		border-radius: 5px;
		text-align: center;

		font-size: 0.8rem;

		span {
			font-weight: 600;
			color: #dab55d;
		}
	}
`;

export const StyledWeatherCurrent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;

	.city {
		font-size: 1.5rem;
	}

	.current-conditions {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 2rem;

		img {
			width: auto;
			height: 100%;
		}

		.temp {
			margin-left: 1rem;
		}
	}

	.day-length {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 1rem;

			svg {
				height: 100%;
				font-size: 1.5rem;
			}
			p {
				margin: 0 0.5rem;
				font-size: 0.8rem;
				font-weight: 300;
				color: #c3c3c3;
			}
		}
	}

	.additional-conditions {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin: 1rem 0;

		font-size: 0.5rem;
		font-weight: 100;
		color: #c3c3c3;

		.condition-wrapper {
			${flexCenter};
			flex-direction: column;
			width: 30%;

			.details {
				${flexCenter};
				flex-direction: column;
				width: 100%;
				background-color: rgba(255, 255, 255, 0.1);
				border-radius: 5px;

				svg {
					font-size: 1.5rem;
				}

				p {
					font-size: 0.8rem;
					font-weight: 300;
					color: #c3c3c3;
				}
			}
		}
	}
`;

export const StyledWeatherForecast = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	.forecast-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 18%;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 5px;

		.item-day {
			font-size: 1rem;
			font-weight: 400;
		}

		img {
			height: 3rem;
		}

		.item-condition {
			font-size: 0.7rem;
			font-weight: 400;
		}

		.item-temp {
			font-size: 1rem;
			font-weight: 400;
		}
	}
`;
