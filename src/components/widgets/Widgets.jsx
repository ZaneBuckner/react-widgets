import { useContext } from 'react';
import { WidgetContext } from 'context/WidgetContext';
import { v4 as uuidv4 } from 'uuid';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { motion, AnimatePresence } from 'framer-motion';

import Counter from './counter/Counter';
import Weather from './weather/Weather';
import Codewars from './codewars/Codewars';
import Clock from './clock/Clock';
import Todo from './todo/Todo';
import Timer from './timer/Timer';

const useStyles = makeStyles(theme => ({
	grid: {
		width: '100%',
		maxWidth: '1200px',
		margin: '0 auto',
		padding: '0 20px',
	},
}));

function Widgets() {
	const { currentDisplay } = useContext(WidgetContext);
	const classes = useStyles();

	const widgetComponents = [
		{
			id: uuidv4(),
			ref: 'weather',
			component: <Weather />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('weather'),
		},
		{
			id: uuidv4(),
			ref: 'todo',
			component: <Todo />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('todo'),
		},
		{
			id: uuidv4(),
			ref: 'clock',
			component: <Clock />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('clock'),
		},
		{
			id: uuidv4(),
			ref: 'codewars',
			component: <Codewars />,
			columns: { xs: 12, sm: 12, md: 12 },
			isVisible: currentDisplay('codewars'),
		},
		{
			id: uuidv4(),
			ref: 'timer',
			component: <Timer />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('timer'),
		},
		{
			id: uuidv4(),
			ref: 'counter',
			component: <Counter />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('counter'),
		},
	];

	return (
		<Grid container className={classes.grid} spacing={3}>
			{widgetComponents.map(
				widget =>
					widget.isVisible && (
						<Grid
							item
							key={widget.id}
							className={classes.item}
							xs={widget.columns.xs}
							sm={widget.columns.sm}
							md={widget.columns.md}
						>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, borderRadius: '10px' }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.5 }}
									whileHover={{ boxShadow: '4px 8px 13px -4px rgba(0, 0, 0, 0.30)' }}
								>
									{widget.component}
								</motion.div>
							</AnimatePresence>
						</Grid>
					),
			)}
		</Grid>
	);
}

export default Widgets;
