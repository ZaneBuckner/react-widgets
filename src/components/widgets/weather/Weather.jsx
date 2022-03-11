import { useState, useEffect } from 'react';
import { useAuthContext } from 'context/AuthContext';
import styled from 'styled-components';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';
import { AboutModal, UtilityModal } from './WeatherModal';
import WeatherSearch from './WeatherSearch';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';
import { SettingsIcon } from 'Assets/WidgetIcons';

const defaultLocation = {
	city: 'New York',
	state: 'New York',
	country: 'United States',
	lat: 40.7127281,
	lon: -74.0060152,
};

const unitsRef = {
	imperial: {
		temp: <i className='wi-units wi wi-fahrenheit' />,
		speed: 'mph',
		volume: 'mm',
		pressure: 'hPa',
		percent: '%',
		distance: 'm',
	},
	metric: {
		temp: <i className='wi-units wi wi-celsius' />,
		speed: 'm/s',
		volume: 'mm',
		pressure: 'hPa',
		percent: '%',
		distance: 'm',
	},
	standard: {
		temp: `\u1D37`,
		speed: 'm/s',
		volume: 'mm',
		pressure: 'hPa',
		percent: '%',
		distance: 'm',
	},
};

export default function Weather() {
	const { currentUser, userData } = useAuthContext();

	const [location, setLocation] = useState(null);
	const [weatherURL, setWeatherURL] = useState('');
	const [forecastURL, setForecastURL] = useState('');
	const [weatherUnits, setWeatherUnits] = useState('imperial'); // *imperial | metric | standard
	const [forecastUnits, setForecastUnits] = useState('daily'); // *daily | hourly

	const [fetchedAt, setFetchedAt] = useState(null);
	const [locationTimeValues, setLocationTimeValues] = useState(null);

	const [isAboutModal, setIsAboutModal] = useState(false);
	const [isUtilityModal, setIsUtilityModal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);
	const handleUtilityToggle = () => setIsUtilityModal(isUtilityModal => !isUtilityModal);
	const handleModalSwitch = () => [handleAboutToggle(), handleUtilityToggle()];
	const handleSearchToggle = () => setIsSearch(isSearch => !isSearch);

	const LoadingAnimation = loading => (
		<ScaleLoader
			loading={loading}
			speedMultiplier={1}
			color={'#DAB55D'}
			css={{ margin: 'auto 0', transform: 'scale(1.5)' }}
		/>
	);

	// SET LOCATION OBJECT => ON MOUNT || WHEN USER AUTH CHANGES
	useEffect(() => {
		if (!currentUser) return setLocation(defaultLocation);
		userData && setLocation(userData.location);
	}, [currentUser, userData]);

	// BUILD FETCH URLS (WEATHER & FORECAST) => WHEN LOCATION || UNITS UPDATE
	useEffect(() => {
		if (!location) return;
		const { lat, lon } = location;
		setWeatherURL(buildFetchURL(lat, lon, 'minutely,hourly,daily', weatherUnits));
		setForecastURL(buildFetchURL(lat, lon, 'current,minutely', weatherUnits));

		function buildFetchURL(lat, lon, exclude, weatherUnits) {
			const api = {
				weatherData: `https://api.openweathermap.org/data/2.5/onecall?`,
				query: `lat=${lat}&lon=${lon}`,
				param: `&exclude=${exclude}&units=${weatherUnits}`,
				key: `&appid=${process.env.REACT_APP_WIDGET_WEATHER_API_KEY}`,
			};
			return `${api.weatherData}${api.query}${api.param}${api.key}`;
		}
	}, [location, weatherUnits]);

	return (
		<Card>
			<CardHeader
				name='Weather'
				icon={<WeatherIcon />}
				placeholder='City or Zip'
				widgetRef='weather'
				widgetSearch={
					<WeatherSearch
						open={isSearch}
						onToggle={handleSearchToggle}
						onSelect={setLocation}
						placeholder='Search by City, State or Country'
					/>
				}
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<SettingsIcon onClick={handleUtilityToggle} />}
			/>

			<StyledWeather>
				{weatherURL && forecastURL && (
					<>
						<WeatherCurrent
							location={location}
							fetchURL={weatherURL}
							unitsRef={unitsRef}
							weatherUnits={weatherUnits}
							loader={<LoadingAnimation />}
							setFetchedAt={setFetchedAt}
							setLocationTimeValues={setLocationTimeValues}
						/>
						<WeatherForecast
							fetchURL={forecastURL}
							unitsRef={unitsRef}
							weatherUnits={weatherUnits}
							forecastUnits={forecastUnits}
							loader={<LoadingAnimation />}
							locationTimeValues={locationTimeValues}
						/>
					</>
				)}
			</StyledWeather>

			<AboutModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				handleModalSwitch={handleModalSwitch}
				widgetIcon={<WeatherIcon className='widget-icon' />}
				fetchedTime={fetchedAt}
			/>

			<UtilityModal
				open={isUtilityModal}
				onClose={handleUtilityToggle}
				widgetIcon={<WeatherIcon className='widget-icon' />}
				weatherUnits={weatherUnits}
				setWeatherUnits={setWeatherUnits}
				forecastUnits={forecastUnits}
				setForecastUnits={setForecastUnits}
			/>
		</Card>
	);
}

const StyledWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 40rem;
	height: 20rem;

	font-family: 'Roboto', serif;
	color: #c3c3c3;
`;
