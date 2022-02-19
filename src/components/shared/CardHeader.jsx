import { useWidgetContext } from 'context/WidgetContext';
import styled from 'styled-components';

import { CloseIcon, InfoIcon } from 'Assets/WidgetIcons';

export default function CardHeader({
	name,
	icon,
	widgetRef,
	widgetSearch,
	onAboutToggle,
	onUtilityToggle,
}) {
	const { toggleDisplay } = useWidgetContext();

	return (
		<StyledCardHeader>
			{icon}
			<h1 className='widget-title'>{name}</h1>
			<StyledIcons>
				{onUtilityToggle && onUtilityToggle}
				{widgetSearch && widgetSearch}
				{onAboutToggle && <InfoIcon aria-label='Open Widget Modal' onClick={onAboutToggle} />}
				<CloseIcon aria-label='Close Widget' onClick={() => toggleDisplay(widgetRef)} />
			</StyledIcons>
		</StyledCardHeader>
	);
}

const StyledCardHeader = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 1.3rem;
	margin-bottom: 0.5rem;

	font-family: 'Roboto', serif;

	svg {
		width: auto;
		height: 100%;
		fill: #dab55d;
	}

	.widget-header-icon {
		width: auto;
		height: 110%;
		/* stroke: #000;
		fill: #000; */
		stroke: #333333;
		fill: #333333;
		cursor: pointer;

		&:hover {
			filter: brightness(1.2) saturate(1.1);
		}
	}

	.widget-title {
		margin-left: 0.5rem;
		font-size: 0.8rem;
		font-weight: 400;
		color: #dab55d;
	}

	@media (max-width: 500px) {
		height: 1.4rem;
	}
`;

const StyledIcons = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-left: auto;

	svg {
		margin: 0 0.3rem;
	}

	.action-input {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.5rem;
		margin-left: auto;
		max-width: 6.5rem;

		font-family: 'Roboto', serif;
		color: #c3c3c3;

		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 5px;
	}
`;
