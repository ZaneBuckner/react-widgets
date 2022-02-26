import { motion } from 'framer-motion';

function CardAnimation({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, borderRadius: '10px' }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.8 }}
			whileHover={{ boxShadow: '4px 8px 13px -4px rgba(0, 0, 0, 0.30)' }}
		>
			{children}
		</motion.div>
	);
}

export default CardAnimation;
