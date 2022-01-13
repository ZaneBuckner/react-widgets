import { useState, useEffect } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import WeatherModal from './WeatherModal';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';

import { StyledWeather } from './Weather.styled';
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';

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
	const [userInput, setUserInput] = useState('Hammond');
	const [units, setUnits] = useState('imperial');
	const [currentURL, setCurrentURL] = useState('');
	const [forecastURL, setForecastURL] = useState('');
	const [showModal, setShowModal] = useState(false);

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
				setShowModal={setShowModal}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<WeatherModal setUnits={setUnits} />
			</Modal>
			<StyledWeather>
				{currentURL && (
					<WeatherCurrent
						url={currentURL}
						userInput={userInput}
						units={units}
						unitValues={unitValues}
					/>
				)}
				{forecastURL && <WeatherForecast url={forecastURL} units={units} unitValues={unitValues} />}
			</StyledWeather>
		</Card>
	);
}

export default Weather;
