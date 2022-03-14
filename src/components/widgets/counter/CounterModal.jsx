import styled from 'styled-components';

import WidgetModal from '../WidgetModal';

import confusedTravoltaGif from 'Assets/Images/confusedTravoltaGif.gif';

export function AboutModal({ open, onClose, widgetIcon }) {
	return (
		<WidgetModal open={open} onClose={onClose}>
			<StyledIcon>{widgetIcon}</StyledIcon>
			<StyledWrapper>
				<img src={confusedTravoltaGif} alt='Confused Travolta Gif' />
			</StyledWrapper>
		</WidgetModal>
	);
}

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
