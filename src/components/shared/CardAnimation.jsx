import { motion } from 'framer-motion';

function CardAnimation({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, borderRadius: '10px' }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeOut', duration: 0.5 }}
			whileHover={{ boxShadow: '4px 8px 13px -4px rgba(0, 0, 0, 0.30)' }}
		>
			{children}
		</motion.div>
	);
}

export default CardAnimation;
