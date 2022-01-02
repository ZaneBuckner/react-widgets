import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import Button from './Button';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

function Card({ children, small }) {
	const [hovered, setHovered] = useState(false);

	const cardStyle = {
		position: 'relative',
		padding: '1rem',
		background: '#353535',
		borderRadius: '10px',
		boxShadow: '2px 6px 13px -4px rgba(0, 0, 0, 0.57)',
	};

	const removeWidgetButton = {
		position: 'absolute',
		top: '0px',
		right: '0px',
		width: '1.2rem',
		height: '1.2rem',
		margin: '0.25rem',
		cursor: 'pointer',
	};

	const removeWidgetIcon = {
		color: '#C3C3C3',
		width: '100%',
		height: '100%',
	};

	const handleRemoveWidget = () => {
		console.log('Widget Removed');
	};

	const removeButton = () => {
		return (
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<button style={removeWidgetButton} onClick={handleRemoveWidget}>
					<CloseIcon style={removeWidgetIcon} />
				</button>
			</motion.div>
		);
	};

	return (
		<div style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			{hovered && removeButton()}
			{children}
		</div>
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
