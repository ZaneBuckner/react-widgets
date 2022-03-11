import styled from 'styled-components';

import WidgetModal from '../WidgetModal';
import Button from 'components/shared/Button';

import { IoTodayOutline as DailyIcon } from 'react-icons/io5';
import { BsClockHistory as HourlyIcon } from 'react-icons/bs';

import { SettingsIcon } from 'Assets/WidgetIcons';

export function AboutModal({ open, onClose, handleModalSwitch, widgetIcon, fetchedTime }) {
	const FormattedSettingsIcon = <SettingsIcon removeBG width='1rem' height='1rem' color='#DAB55D' style={{ cursor: 'pointer' }} onClick={handleModalSwitch} />; // prettier-ignore

	// prettier-ignore
	const hyperLink = (
    <a className='hyperlink' href='https://openweathermap.org/' target='_blank' rel='noopener noreferrer'>
      OpenWeather APIs
    </a>
  );

	return (
		<WidgetModal open={open} onClose={onClose}>
			{widgetIcon}
			<h1 className='header'>Weather Dashboard</h1>
			<h2 className='subheader'>Rainy Weather && Hacking</h2>
			<div className='body'>
				<p>Select {FormattedSettingsIcon} to change the units.</p>
			</div>
			<div className='footer'>
				Last Updated: {fetchedTime}
				{hyperLink}
			</div>
		</WidgetModal>
	);
}

// prettier-ignore
export function UtilityModal({ open, onClose, widgetIcon, weatherUnits, setWeatherUnits, forecastUnits, setForecastUnits }) {
	return (
		<WidgetModal open={open} onClose={onClose}>
			{widgetIcon}
			<h1 className='header'>Units</h1>
      <StyledButtonGroup>
      <div className='weather-units'>
				<Button
					animate
					size='medium'
					buttonState={weatherUnits === 'imperial' && true}
					onClick={() => setWeatherUnits('imperial')}
					text='°F'
				/>
				<Button
					animate
					size='medium'
					buttonState={weatherUnits === 'metric' && true}
					onClick={() => setWeatherUnits('metric')}
					text='°C'
				/>
				<Button
					animate
					size='medium'
					buttonState={weatherUnits === 'standard' && true}
					onClick={() => setWeatherUnits('standard')}
					text='SI Units'
				/>
			</div>
			<div className='forecast-units'>
				<Button
					animate
					size='medium'
					variant='combo'
					icon={<DailyIcon />}
					children='Daily'
					buttonState={forecastUnits === 'daily' && true}
					onClick={() => setForecastUnits('daily')}
				/>
				<Button
					animate
					size='medium'
					variant='combo'
					icon={<HourlyIcon />}
					children='Hourly'
					buttonState={forecastUnits === 'hourly' && true}
					onClick={() => setForecastUnits('hourly')}
				/>
			</div>
      </StyledButtonGroup>
		</WidgetModal>
	);
}

const StyledButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-items: center;
	width: 100%;
	height: 100%;

	.weather-units {
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-row-gap: 1rem;
		justify-items: center;
		align-items: center;
	}

	.forecast-units {
		display: grid;
		grid-template-rows: repeat(2, auto);
		grid-row-gap: 1rem;
		justify-items: center;
		align-items: center;
	}
`;
