import { useState, useEffect } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';

import WidgetModal from 'components/widgets/WidgetModal';
import { About, Utility } from './WeatherModal';

import { StyledWeather } from './Weather.styled';
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';
import { IoMdSettings as SettingsIcon } from 'react-icons/io';

const api = {
	key: `&appid=ca83fef2c9a6797b8aa86d8ff2304488`,
	current: `https://api.openweathermap.org/data/2.5/weather?`,
	forecast: `https://api.openweathermap.org/data/2.5/forecast?`,
};

const unitValues = {
	imperial: {
		temp: '°F',
		speed: 'mph',
		volume: 'mm',
		pressure: 'hPa',
		percent: '%',
		distance: 'm',
	},
	metric: {
		temp: `°C`,
		speed: 'm/s',
		volume: 'mm',
		pressure: 'hPa',
		percent: '%',
		distance: 'm',
	},
	standard: {
		temp: 'K',
		speed: 'm/s',
		volume: 'mm',
		pressure: 'hPa',
		percent: '%',
		distance: 'm',
	},
};

function Weather() {
	const [currentURL, setCurrentURL] = useState('');
	const [forecastURL, setForecastURL] = useState('');
	const [userInput, setUserInput] = useState(70401);
	const [fetchedTime, setFetchedTime] = useState('');
	const [units, setUnits] = useState('imperial');

	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isUtilityModal, setIsUtilityModal] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(!isAboutModal);
	const handleUtilityToggle = () => setIsUtilityModal(!isUtilityModal);
	const handleModalSwitch = () => [handleAboutToggle(), handleUtilityToggle()];

	useEffect(() => {
		if (isNaN(userInput)) {
			const currentURL = `${api.current}q=${userInput}&units=${units}${api.key}`;
			const forecastURL = `${api.forecast}q=${userInput}&units=${units}${api.key}`;
			setCurrentURL(currentURL);
			setForecastURL(forecastURL);
		} else {
			const currentURL = `${api.current}zip=${userInput}&units=${units}${api.key}`;
			const forecastURL = `${api.forecast}zip=${userInput}&units=${units}${api.key}`;
			setCurrentURL(currentURL);
			setForecastURL(forecastURL);
		}
	}, [userInput, units]);

	return (
		<Card>
			<CardHeader
				name='Weather'
				icon={<WeatherIcon />}
				placeholder='City or Zip'
				widgetRef='weather'
				setUserInput={setUserInput}
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<SettingsIcon className='action-icons' onClick={handleUtilityToggle} />}
			/>

			<StyledWeather>
				{currentURL && (
					<WeatherCurrent
						url={currentURL}
						userInput={userInput}
						units={units}
						unitValues={unitValues}
						setFetchedTime={setFetchedTime}
					/>
				)}
				{forecastURL && <WeatherForecast url={forecastURL} units={units} unitValues={unitValues} />}
			</StyledWeather>

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<WeatherIcon className='widget-icon' />}
						settingsIcon={<SettingsIcon className='icon' onClick={handleModalSwitch} />}
						fetchedTime={fetchedTime}
					/>
				}
			/>

			<WidgetModal
				open={isUtilityModal}
				onClose={handleUtilityToggle}
				element={
					<Utility
						widgetIcon={<WeatherIcon className='widget-icon' />}
						settingsIcon={<SettingsIcon className='icon' />}
						units={units}
						setUnits={setUnits}
					/>
				}
			/>
		</Card>
	);
}

export default Weather;
