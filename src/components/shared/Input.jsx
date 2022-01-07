import styled from 'styled-components';

const StyledInput = styled.input`
	display: flex;
	align-items: center;
	padding: 0.2rem 0.5rem;

	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 5px;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	::placeholder {
		font: inherit;
		color: #c3c3c3;
		opacity: 80%;
	}
`;

function Input({ children, ...inputProps }) {
	return <StyledInput {...inputProps}></StyledInput>;
}

export default Input;
