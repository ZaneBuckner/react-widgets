import { Container } from '../../globalStyles';
import { Grid } from '@material-ui/core';

import Counter from './counter/Counter';
import User from './user/User';
import Weather from './weather/Weather';
import Codewars from './codewars/Codewars';
import Clock from './clock/Clock';

// const useStyles = makeStyles(theme => ({
// 	root: {},
// 	paper: {
// 		// padding: theme.spacing(2),
// 		// textAlign: 'center',
// 		// color: theme.palette.text.secondary,
// 		padding: '1.5rem',
// 		borderRadius: '10px',
// 		boxShadow: '2px 6px 13px -4px rgba(0, 0, 0, 0.57)',
// 	},
// }));

const widgetGridStyles = {
	alignItems: 'center',
	// with: '100vw',
	// maxWidth: '1100px',
	// margin: 'auto',
	// padding: `1rem`,
};

function Widgets() {
	return (
		<Container>
			<Grid container spacing={3} style={widgetGridStyles}>
				<Grid item xs={12} sm={6} md={4}>
					<Weather />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Clock />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Counter />
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<User />
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<Codewars />
				</Grid>
			</Grid>
		</Container>
	);
}

export default Widgets;

// <div className='container'>
// 	<Clock />
// 	<Counter />
// 	<User />
// 	<Weather />
// 	<Codewars />
// </div>
