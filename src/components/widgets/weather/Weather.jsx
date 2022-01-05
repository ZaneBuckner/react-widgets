import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherToolbar from './WeatherToolbar';
import WeatherCurrent from './WeatherCurrent';

import Card from '../../shared/Card';
import { StyledWeather, WeatherFooter } from './Weather.styled';

import Button from '../../shared/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { PostAddSharp } from '@material-ui/icons';

const api = {
	key: 'ca83fef2c9a6797b8aa86d8ff2304488',
	base: 'https://api.openweathermap.org/data/2.5/',
	city: {
		id: 4326868,
		name: 'Hammond',
		state: 'LA',
		country: 'US',
		zip: 70401,
	},
};

// const units = ['standard', 'metric', 'imperial'];

const hammond = {
	lat: 30.5044,
	lon: -90.4612,
	plusCode: 'GG4Q+2Q',
	address: '120+North+Cate+Street,+Hammond,+LA',
};

function Weather() {
	const [isLoading, setIsLoading] = useState(false);
	const [currentWeather, setCurrentWeather] = useState([]);
	const [forecast, setForecast] = useState([]);
	const [alerts, setAlerts] = useState([]);

	const [address, setAddress] = useState([]);
	const [geolocation, setGeolocation] = useState([]);
	const [userInput, setUserInput] = useState('');

	useEffect(() => {
		fetchWeatherData(hammond.lat, hammond.lon, 'imperial');
		// getAddress(hammond.lat, hammond.lon);
		// getGeolocation(hammond.address);
	}, []);

	const fetchWeatherData = async (lat, lon, units) => {
		const query = `${api.base}onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${api.key}`;
		try {
			const res = await axios.get(query);
			if (res.data) {
				setCurrentWeather(res.data.current);
				setForecast(res.data.daily);
				setAlerts(res.data.alerts);
			}
		} catch (err) {
			console.log(err.res.data);
			console.log(err.res.status);
			console.log(err.res.headers);
		}
	};

	// GOOGLE GEOCODING API - REVERSE GEOCODING
	// Return address from latitude & longitude inputs.
	// DOC: https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding?hl=en_US#reverse-example
	const getAddress = async (lat, lon) => {
		const key = 'AIzaSyBiKqzYNO3XwL0p3sCP_fGFxRjVHRdrvOs';
		const coords = `${lat},${lon}`;
		const query = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords}&key=${key}`;
		try {
			const res = await axios.get(query);
			console.log(res.data);
		} catch (err) {
			console.log(err.res.data);
			console.log(err.res.status);
			console.log(err.res.headers);
		}
	};

	// GOOGLE GEOCODING API - GEOCODING
	// DOC: https://developers.google.com/maps/documentation/geocoding/requests-geocoding?hl=en_US#request
	// EXAMPLE QUERY: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBiKqzYNO3XwL0p3sCP_fGFxRjVHRdrvOs'
	const getGeolocation = async address => {
		const key = 'AIzaSyBiKqzYNO3XwL0p3sCP_fGFxRjVHRdrvOs';
		const base = 'https://maps.googleapis.com/maps/api/geocode/json?';
		const query = `${base}address=${address}&key=${key}`;
		try {
			const res = await axios.get(query);
			const coords = res.data.results[0].geometry.location;
			const formattedAddress = res.data.results[0].formatted_address;
			console.log(res.data);
		} catch (err) {
			console.log(err.res.data);
			console.log(err.res.status);
			console.log(err.res.headers);
		}
	};

	const getFormattedTime = unixTime => {
		let date = new Date(unixTime * 1000);
		let hours = (date.getHours() + 24) % 12 || 12;
		let minutes = date.getMinutes();
		let meridian = date.getHours() < 12 ? 'AM' : 'PM';
		return `${hours}:${minutes} ${meridian}`;
	};

	// const currentWeatherIcon = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

	// const standardIcon = () => <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='' />;

	userInput && console.log(userInput);

	const iconStyles = {
		fontSize: '2.5rem',
		color: '#C3C3C3',
	};

	return (
		<Card>
			<StyledWeather>
				<WeatherToolbar setUserInput={setUserInput} iconStyles={iconStyles}></WeatherToolbar>
				{/* {currentWeather && <WeatherCurrent currentWeather={currentWeather} />} */}

				<WeatherFooter>
					<p>OpenWeather API</p>
					{currentWeather && <p>Last Update: {getFormattedTime(currentWeather.dt)}</p>}
				</WeatherFooter>
			</StyledWeather>
		</Card>
	);
}

export default Weather;
