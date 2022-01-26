import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: ${({ header }) => (header ? 'none' : '1200px')};
	margin: ${({ centerJustify }) => (centerJustify ? 'auto 0' : '0 auto')};
	padding: ${({ header }) => (header ? '0 30px' : '0 50px')};

	@media (max-width: 500px) {
		padding: 0 25px;
	}
`;

export const StyledModal = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: auto;
	padding: 1rem;

	font-family: 'Montserrat', serif;
	color: #c3c3c3;

	background-color: rgba(53 53 53, 0.5);
	border: #c3c3c3;
	border-radius: 10px;
	backdrop-filter: blur(6px);

	a:hover {
		color: #dab55d;
	}

	.close-modal-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;

		font-size: 1.8rem;
		fill: #dab55d;
		cursor: pointer;
	}

	svg {
		font-size: 2rem;
		height: 2rem;
		color: #dab55d;
		fill: #dab55d;
	}

	.modal-title {
		font-size: 1.5rem;
		font-weight: 300;
		color: #dab55d;

		@media (max-width: 450px) {
			font-size: 1rem;
		}
	}

	.modal-description {
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
	}

	.modal-usage {
		margin-top: 1rem;
		font-size: 0.8rem;
		font-weight: 400;
		text-align: center;

		svg {
			vertical-align: middle;
			font-size: 1.5rem;
			cursor: pointer;
		}

		a {
			&:hover {
				color: #dab55d;
			}
		}
	}

	.modal-footer {
		position: absolute;
		bottom: 1rem;

		font-size: 0.8rem;
		text-align: center;

		svg {
			margin-left: 1rem;
			vertical-align: middle;
			font-size: 1.5rem;
			cursor: pointer;
		}

		a {
			&:hover {
				color: #dab55d;
			}
		}
	}
`;
