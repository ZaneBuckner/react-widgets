import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

function Card({ children, small }) {
	const [hovered, setHovered] = useState(false);
	// CONDITIONAL CLASS
	// IF REVERSE PROP === TRUE; INCLUDE THAT CLASS NAME
	// return <div className={`card ${reverse && 'reverse'}`}>{children}</div>

	const cardStyle = {
		position: 'relative',
		// margin: '1.5rem',
		padding: '1.5rem',
		background: '#353535',
		borderRadius: '10px',
		boxShadow: '2px 6px 13px -4px rgba(0, 0, 0, 0.57)',
	};

	const cardSmall = {
		width: '2rem',
	};

	const removeIconStyle = {
		position: 'absolute',
		top: '0px',
		right: '0px',
		width: '1.5rem',
		height: '1.5rem',
		margin: '0.25rem',
		background: '#333333',
		color: '#B3B3B3',
		cursor: 'pointer',
	};

	const handleRemoveWidget = () => {
		console.log('Widget Removed');
	};

	const removeButton = () => {
		return (
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<button className='removeIcon' style={removeIconStyle} onClick={handleRemoveWidget}>
					<ClearOutlinedIcon />
				</button>
			</motion.div>
		);
	};

	// Conditional Styling
	// className={`card ${condition ? 'active' : ''}`}

	return (
		<div className={`card ${small && 'cardSmall'}`} style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
