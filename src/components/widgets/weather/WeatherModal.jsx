import { StyledWeatherModal } from './Weather.styled';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
	buttonGroup: {},
	button: {
		color: '#333333',
	},
});

function WeatherModal({ setUnits }) {
	const classes = useStyles();

	return (
		<StyledWeatherModal>
			<h1>Units</h1>
			<ButtonGroup
				className={classes.buttonGroup}
				variant='contained'
				aria-label='outlined primary button group'
			>
				<Button className={classes.button} onClick={() => setUnits('imperial')}>
					&deg;F
				</Button>
				<Button className={classes.button} onClick={() => setUnits('metric')}>
					&deg;C
				</Button>
				<Button className={classes.button} onClick={() => setUnits('standard')}>
					SI Units
				</Button>
			</ButtonGroup>
		</StyledWeatherModal>
	);
}

export default WeatherModal;
