import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CloseIcon } from 'Assets/WidgetIcons';

export default function WidgetModal({ open, onClose, element }) {
	return (
		open && (
			<StyledWidgetModal>
				<StyledCloseIcon onClick={onClose} />
				{element}
			</StyledWidgetModal>
		)
	);
}

WidgetModal.propTypes = {
	open: PropTypes.bool.isRequired, // CURRENT DISPLAY STATE
	onClose: PropTypes.func.isRequired, // TOGGLE DISPLAY STATE
	element: PropTypes.node.isRequired, // MODAL ELEMENT
};

const StyledWidgetModal = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 4fr 1fr;
	width: 100%;
	height: 100%;
	padding: 1rem;
	place-items: center;

	font-family: 'Montserrat', serif;
	color: #c3c3c3;

	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(8px) saturate(130%);

	.widget-icon {
		position: absolute;
		top: 0;
		left: 0;
		margin: 1rem;

		font-size: 1.5rem;
		fill: #dab55d;
	}

	.icon {
		font-size: 1.3rem;
		vertical-align: middle;
		fill: #dab55d;
		cursor: pointer;
	}

	.hyperlink {
		color: #dab55d;
	}

	.header {
		font-size: 1.3rem;
		font-weight: 500;
		margin-top: 3rem;
		text-align: center;
	}

	.subheader {
		margin-bottom: auto;

		font-size: 0.9rem;
		font-weight: 300;
		text-align: center;
	}

	.body {
		width: 100%;

		font-size: 1.1rem;
		font-weight: 400;
		text-align: center;

		p {
			margin: 1rem 0;
		}
	}

	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: auto;

		font-size: 0.8rem;
		font-weight: 300;
	}
`;

const StyledCloseIcon = styled(CloseIcon)`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	width: 1.3rem;
	height: 1.3rem;
	fill: #000;

	cursor: pointer;
`;
