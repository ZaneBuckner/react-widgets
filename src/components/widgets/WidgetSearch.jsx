import styled from 'styled-components';

import { HiSearchCircle as SearchIcon } from 'react-icons/hi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

export default function WidgetSearch({ open, onToggle, onSubmit, placeholder }) {
	if (!open) return <StyledSearchIcon className='action-icons' onClick={onToggle} />;
	return (
		<SearchContainer>
			<SearchInput type='text' placeholder={placeholder} spellCheck='false' onKeyPress={onSubmit} />
			<StyledCloseIcon onClick={onToggle} />
		</SearchContainer>
	);
}

const SearchContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 125%;

	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(8px) saturate(130%);
`;

const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0 0.5rem;

	font-family: 'Montserrat', serif;
	font-size: 0.9rem;
	font-weight: 400;
	color: #c3c3c3;

	background-color: rgba(70, 70, 70, 0.3);
	backdrop-filter: blur(8px) saturate(130%);
`;

const StyledCloseIcon = styled(CloseIcon)`
	position: absolute;
	right: 0;
	height: 100%;
	margin-right: 0.3rem;
	cursor: pointer;
`;

const StyledSearchIcon = styled(SearchIcon)`
	transform: rotate(270deg) !important;
	cursor: pointer;
`;
