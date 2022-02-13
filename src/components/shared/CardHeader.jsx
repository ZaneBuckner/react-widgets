import { useWidgetContext } from 'context/WidgetContext';
import styled from 'styled-components';

import { AiFillInfoCircle as InfoIcon, AiFillCloseCircle as CancelIcon } from 'react-icons/ai';

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
				{onAboutToggle && (
					<InfoIcon
						className='action-icons'
						aria-label='Open Widget Modal'
						onClick={onAboutToggle}
					/>
				)}
				<CancelIcon
					className='action-icons'
					aria-label='Close Widget'
					onClick={() => toggleDisplay(widgetRef)}
				/>
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

	.widget-title {
		margin-left: 0.5rem;
		font-size: 0.8rem;
		font-weight: 400;
		color: #dab55d;
	}

	@media (max-width: 500px) {
		height: 1.8rem;
	}
`;

const StyledIcons = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-left: auto;

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

	.action-icons {
		cursor: pointer;
		height: 100%;
		margin-left: 0.3rem;
	}
`;
