import styled from 'styled-components';

const StyledIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	margin: 1rem;
`;

const StyledWrapper = styled.div`
	grid-area: 2 / 1 / 5 / 2;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
	}
`;

export function About({ widgetIcon, gif }) {
	return (
		<>
			<StyledIcon>{widgetIcon}</StyledIcon>
			<StyledWrapper>{gif}</StyledWrapper>
		</>
	);
}
