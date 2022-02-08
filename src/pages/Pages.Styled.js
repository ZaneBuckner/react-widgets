import styled from 'styled-components';

export const StyledErrorMessage = styled.h3`
	display: flex;
	align-items: center;
`;

export const StyledSuccessMessage = styled.div`
	display: flex;
	align-items: center;
	color: #5eb34d;

	h3 {
		font-size: 1rem;
		font-weight: 400;
	}

	svg {
		font-size: 1.5rem;
		margin-right: 0.5rem;
	}
`;

export const StyledLoginForm = styled.div`
	grid-area: 3 / 1 / 4 / 2;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 2rem;
	place-items: center;
	width: 100%;

	.submit-btn {
		width: 9rem;
		text-transform: uppercase;
		color: #dab55d;
	}
`;

export const StyledRegisterForm = styled.div`
	grid-area: 3 / 1 / 5 / 2;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-row-gap: 2rem;
	place-items: center;
	width: 100%;
	margin: auto 0;

	.submit-btn {
		width: 9rem;
		text-transform: uppercase;
		color: #dab55d;
	}
`;

export const StyledResetPasswordForm = styled.div`
	grid-area: 3 / 1 / 5 / 2;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 2fr;
	place-items: center;
	width: 100%;

	.submit-btn {
		width: 9rem;
		text-transform: uppercase;
		color: #dab55d;
	}
`;
