import { StyledWeatherModal } from './Weather.styled';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
