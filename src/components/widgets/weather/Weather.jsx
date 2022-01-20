import { useState, useEffect } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import UtilityModal from 'components/shared/UtilityModal';
import WeatherModal from './WeatherModal';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';

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
	const [showModal, setShowModal] = useState(false);
	const [showUtilityModal, setShowUtilityModal] = useState(false);

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

	const handleModalSettings = () => {
		setShowModal(!showModal);
		setShowUtilityModal(!showUtilityModal);
	};

	return (
		<Card>
			<CardHeader
				name='Weather'
				icon={<WeatherIcon />}
				placeholder='City or Zip'
				widgetRef='weather'
				setUserInput={setUserInput}
				setShowModal={setShowModal}
				utilityModal={
					<SettingsIcon
						title='Add New Task'
						className='action-icons'
						aria-label='Open Widget Modal'
						onClick={() => setShowUtilityModal(!showUtilityModal)}
					/>
				}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<WeatherIcon />
				<h1 className='modal-title'>Weather Dashboard</h1>
				<h2 className='modal-description'>Rainy Weather && Hacking</h2>
				<p className='modal-usage'>
					To change units, select the {<SettingsIcon onClick={handleModalSettings} />} icon.
					<br />
					Weather data provided by OpenWeather APIs
				</p>
				{fetchedTime && (
					<p className='modal-footer'>
						Last Updated: {fetchedTime}
						<br />
						<a href='https://openweathermap.org/' target='_blank' rel='noopener noreferrer'>
							https://openweathermap.org/
						</a>
					</p>
				)}
			</Modal>
			<UtilityModal showUtilityModal={showUtilityModal} setShowUtilityModal={setShowUtilityModal}>
				<WeatherModal setUnits={setUnits} />
			</UtilityModal>
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
		</Card>
	);
}

export default Weather;
