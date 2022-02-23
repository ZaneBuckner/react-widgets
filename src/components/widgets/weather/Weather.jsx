import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';

import WidgetModal from 'components/widgets/WidgetModal';
import { About, Utility } from './WeatherModal';
import WidgetSearch from '../WidgetSearch';

import { StyledWeather } from './Weather.styled';
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';
import { SettingsIcon } from 'Assets/WidgetIcons';

const api = {
	key: `&appid=${process.env.REACT_APP_WIDGET_WEATHER_API_KEY}`,
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
	const { userData } = useAuthContext();
	const [currentURL, setCurrentURL] = useState('');
	const [forecastURL, setForecastURL] = useState('');
	const [userInput, setUserInput] = useState('');
	const [fetchedTime, setFetchedTime] = useState('');
	const [units, setUnits] = useState('imperial');

	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isUtilityModal, setIsUtilityModal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);
	const handleUtilityToggle = () => setIsUtilityModal(isUtilityModal => !isUtilityModal);
	const handleModalSwitch = () => [handleAboutToggle(), handleUtilityToggle()];

	const handleSearchToggle = () => setIsSearch(isSearch => !isSearch);
	const handleSearchSubmit = e => e.key === 'Enter' && setUserInput(e.target.value);

	useEffect(() => {
		if (userData) {
			// DETERMINES QUERY BASED ON THE EXISTENCE OF A USER LOCATION ZIP CODE
			const query = userData?.location?.zip ? `zip=${userData.location.zip}` : `zip=10001`;
			setCurrentURL(`${api.current}${query}&units=${units}${api.key}`);
			setForecastURL(`${api.forecast}${query}&units=${units}${api.key}`);
		}

		if (userInput) {
			// DETERMINES WHETHER TO QUERY A STRING (CITY) OR NUMBER (ZIP CODE)
			const query = isNaN(userInput) ? `q=${userInput}` : `zip=${userInput}`;
			setCurrentURL(`${api.current}${query}&units=${units}${api.key}`);
			setForecastURL(`${api.forecast}${query}&units=${units}${api.key}`);
		}

		if (!userInput && !userData) {
			setCurrentURL(`${api.current}zip=10001&units=${units}${api.key}`);
			setForecastURL(`${api.forecast}zip=10001&units=${units}${api.key}`);
		}
	}, [userData, userInput, units]);

	return (
		<Card>
			<CardHeader
				name='Weather'
				icon={<WeatherIcon />}
				placeholder='City or Zip'
				widgetRef='weather'
				widgetSearch={
					<WidgetSearch
						open={isSearch}
						onToggle={handleSearchToggle}
						onSubmit={handleSearchSubmit}
						placeholder='Search by city or ZIP code'
					/>
				}
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<SettingsIcon onClick={handleUtilityToggle} />}
			/>

			{currentURL && forecastURL && (
				<StyledWeather>
					<WeatherCurrent
						url={currentURL}
						userInput={userInput}
						units={units}
						unitValues={unitValues}
						setFetchedTime={setFetchedTime}
					/>
					<WeatherForecast url={forecastURL} units={units} unitValues={unitValues} />
				</StyledWeather>
			)}

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<WeatherIcon className='widget-icon' />}
						settingsIcon={
							<SettingsIcon
								removeBG
								width='1rem'
								height='1rem'
								color='#DAB55D'
								style={{ cursor: 'pointer' }}
								onClick={handleModalSwitch}
							/>
						}
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
						settingsIcon={<SettingsIcon removeBG className='inline-icon' />}
						units={units}
						setUnits={setUnits}
					/>
				}
			/>
		</Card>
	);
}

export default Weather;
