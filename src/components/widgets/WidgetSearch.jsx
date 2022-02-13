import styled from 'styled-components';

import { HiSearchCircle as SearchIcon } from 'react-icons/hi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

export default function WidgetSearch({ open, onToggle, onSubmit, placeholder }) {
	return open ? (
		<SearchContainer>
			<SearchInput type='text' placeholder={placeholder} spellCheck='false' onKeyPress={onSubmit} />
			<CloseIcon className='close-icon' onClick={onToggle} />
		</SearchContainer>
	) : (
		<StyledSearchIcon className='action-icons' onClick={onToggle} />
	);
}

const SearchContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 120%;

	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(8px) saturate(130%);

	.close-icon {
		position: absolute;
		right: 0;
		color: #c3c3c3;
		font-size: 0.8rem;
		cursor: pointer;
	}
`;

const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0 0.5rem;

	font-family: 'Montserrat', serif;
	font-weight: 500;
	color: #c3c3c3;

	border-radius: 5px;
	background-color: rgba(70, 70, 70, 0.3);
	backdrop-filter: blur(8px) saturate(130%);
`;

const StyledSearchIcon = styled(SearchIcon)`
	transform: rotate(270deg) !important;
	cursor: pointer;
`;
