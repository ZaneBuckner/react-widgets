import { useContext } from 'react';
import { WidgetContext } from 'context/WidgetContext';

import { Container } from 'globalStyles';
import { Grid } from '@material-ui/core';

import Counter from './counter/Counter';
import Weather from './weather/Weather';
import Codewars from './codewars/Codewars';
import Clock from './clock/Clock';
import Todo from './todo/Todo';
import Timer from './timer/Timer';

const widgetGridStyles = {
	alignItems: 'center',
	// with: '100vw',
	// maxWidth: '1100px',
	// margin: 'auto',
	// padding: `1rem`,
};

function Widgets() {
	const { currentDisplay } = useContext(WidgetContext);

	return (
		<Container widgets>
			<Grid container spacing={3} style={widgetGridStyles}>
				{currentDisplay('weather') && (
					<Grid item xs={12} sm={6} md={4}>
						<Weather />
					</Grid>
				)}
				{currentDisplay('todo') && (
					<Grid item xs={12} sm={6} md={4}>
						<Todo />
					</Grid>
				)}
				{currentDisplay('clock') && (
					<Grid item xs={12} sm={6} md={4}>
						<Clock />
					</Grid>
				)}
				{currentDisplay('timer') && (
					<Grid item xs={12} sm={6} md={4}>
						<Timer />
					</Grid>
				)}
				{currentDisplay('codewars') && (
					<Grid item xs={12} sm={12} md={12}>
						<Codewars />
					</Grid>
				)}
				{currentDisplay('counter') && (
					<Grid item xs={12} sm={6} md={4}>
						<Counter />
					</Grid>
				)}
			</Grid>
		</Container>
	);
}

export default Widgets;
