import styled from 'styled-components';

import { CloseIcon } from 'Assets/WidgetIcons';
import { SearchIcon } from 'Assets/WidgetIcons';

export default function WidgetSearch({
	open,
	onToggle,
	onSubmit,
	placeholder,
	children,
	...props
}) {
	if (!open) return <SearchIcon onClick={onToggle} />;
	return (
		<>
			<SearchContainer>
				<SearchInput type='text' placeholder={placeholder} onKeyPress={onSubmit} {...props} />
				<CloseIcon onClick={onToggle} />
			</SearchContainer>
			{children}
		</>
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
	background-color: rgba(30, 30, 30, 0.3);
	backdrop-filter: blur(8px) saturate(60%);

	svg {
		height: 100% !important;
	}
`;

const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0 0.5rem;

	font-family: 'Montserrat', serif;
	font-size: 0.9rem;
	font-weight: 400;
	color: #c3c3c3;

	background-color: transparent;

	/* background-color: rgba(70, 70, 70, 0.3);
	backdrop-filter: blur(8px) saturate(80%); */
`;
