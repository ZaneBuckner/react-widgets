import styled from 'styled-components';

export const StyledUser = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin: 1rem auto;
	overflow: hidden;
	color: #b3b3b3;

	.user-details {
		margin-left: 2rem;

		div {
			display: flex;
			align-items: center;
			margin: 0.5rem 0;

			font-family: 'Karla';
			font-size: 1rem;
			font-weight: 500;

			h2 {
				margin-left: 1rem;
				font: inherit;
			}
		}
	}

	.newUserBtn {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		margin: 0.5rem;
	}
`;
