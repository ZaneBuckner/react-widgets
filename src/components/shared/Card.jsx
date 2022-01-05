import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MdOutlineClose as CloseIcon } from 'react-icons/md';

const StyledCard = styled.div`
	position: relative;
	padding: 1rem;
	background-color: #353535;
	border-radius: 10px;
	box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.57);
`;

const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 1rem;
	opacity: 70%;

	svg {
		width: auto;
		height: 100%;
		fill: #dab55d;
		cursor: pointer;
	}

	h1 {
		margin-left: 0.5rem;
		font-family: 'Roboto', serif;
		font-size: 0.8rem;
		font-weight: 300;
		/* color: #c3c3c3; */
		color: #dab55d;
	}

	.header-actions {
		display: flex;
		align-items: center;
		width: auto;
		height: 1.5rem;
		margin-left: auto;
	}
`;

function Card({ widgetName, icon, children }) {
	const [hovered, setHovered] = useState(false);

	const removeWidget = () => {
		console.log('Widget Removed');
	};

	const removeWidgetButton = () => {
		return <CloseIcon onClick={removeWidget} />;
	};

	return (
		<StyledCard onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<StyledCardHeader>
				{icon}
				<h1>{widgetName}</h1>
				<motion.div className='header-actions' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{hovered && removeWidgetButton()}
				</motion.div>
			</StyledCardHeader>
			{children}
		</StyledCard>
	);
}

Card.defaultProps = {
	reverse: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
