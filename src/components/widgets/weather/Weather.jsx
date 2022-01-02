import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../shared/Card';
import { StyledWeather } from './Weather.styled';

import Button from '../../shared/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { PostAddSharp } from '@material-ui/icons';

import { WiSunrise as SunriseIcon } from 'react-icons/wi';
import { WiSunset as SunsetIcon } from 'react-icons/wi';
import { WiFahrenheit as DegFIcon } from 'react-icons/wi';
import * as weatherIcons from 'react-icons/wi';

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

function Weather() {
	const [weather, setWeather] = useState([]);
	const [forecast, setForecast] = useState([]);

	// useEffect(() => {
	// 	fetchWeather();
	// }, []);

	// const getGeolocation = async () => {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(success, error);
	// 	} else {
	// 		alert('Geolocation is not supported');
	// 	}
	// };

	// getGeolocation();

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const res = await axios.get(`${api.base}weather?id=${api.city.id}&units=imperial&appid=${api.key}`);
				setWeather({
					city: res.data.name,
					country: res.data.sys.country,
					temp: res.data.main.temp,
					tempLow: res.data.main.temp_min,
					tempHigh: res.data.main.temp_max,
					sunrise: res.data.sys.sunrise,
					sunset: res.data.sys.sunset,
					weather: res.data.weather[0].main,
					icon: res.data.weather[0].icon,
					windSpeed: res.data.wind.speed,
					windDir: res.data.wind.deg,
				});
				// console.log(res.data);
			} catch (err) {
				console.log(err.res.data);
				console.log(err.res.status);
				console.log(err.res.headers);
			}
		};
		fetchWeather();
	}, []);

	// useEffect(() => {
	// 	const fetchForcast = async () => {
	// 		try {
	// 			const res = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q={'Hammond'}&appid=${api.key}`);
	// 			setForecast(res.data);
	// 			// console.log(res.data);
	// 		} catch (err) {
	// 			console.log(err.res.data);
	// 			console.log(err.res.status);
	// 			console.log(err.res.headers);
	// 		}
	// 	};
	// }, []);

	forecast && console.log(forecast);

	// weather && console.log(weather);

	const getFormattedTime = unixTime => {
		let date = new Date(unixTime * 1000);
		let hours = (date.getHours() + 24) % 12 || 12;
		let minutes = date.getMinutes();
		let meridian = date.getHours() < 12 ? 'AM' : 'PM';
		return `${hours}:${minutes} ${meridian}`;
	};

	const standardIcon = () => <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='' />;

	const getWindSpeedIcon = windSpeed => {
		let roundedSpeed = Math.round(windSpeed);
		let windSpeedStr = `WiWindBeaufort${roundedSpeed}`;
		return windSpeedStr;
		// let icon = weatherIcons[windSpeedStr];
		// console.log(weatherIcons.WiWindBeaufort2);
		// console.log(weatherIcons[windSpeedStr]);
	};

	const iconStyles = {
		fontSize: '2.5rem',
	};

	return (
		<Card>
			<StyledWeather>
				<h1>
					{weather.city}, {weather.country}
				</h1>
				<h1>
					{weather.temp}
					<DegFIcon style={iconStyles} />
				</h1>

				<div>{standardIcon()}</div>

				<div className='wind'>
					{/* {<testIcons.WiWindBeaufort3 style={iconStyles} />} */}
					{/* {</>} */}
				</div>

				<div className='sun'>
					<SunriseIcon style={iconStyles} />
					<h1>{getFormattedTime(weather.sunrise)}</h1>
				</div>
				<div className='sun'>
					<SunsetIcon style={iconStyles} />
					<h1>{getFormattedTime(weather.sunset)}</h1>
				</div>

				{/* <h1>{main.temp}</h1> */}
				{/* <h1>{weather.main.temp}</h1> */}
				{/* <Button onClick={() => fetchWeather()}>
					<RefreshIcon />
				</Button> */}
				{/* <div className='weather-data'>
					{weather && <h1 className='city'>{weather.name}</h1>}
					{weather && <h2>{weather.main.temp}</h2>}
					{weather && <h2>{weather.weather[0].main}</h2>}
				</div> */}

				{/* <div className='weather-data'> */}
				{/* <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='' /> */}
				{/* <h1 className='city'>{weather.name}</h1> */}
				{/* <h2>{weather.main.temp}</h2> */}
				{/* <h2>{weather.weather[0].description}</h2> */}
				{/* <StyledButton onClick={() => fetchWeather()}>REFRESH</StyledButton>
						</div>
					)} */}
				{/* {weather && <h2>{weather.main.temp}</h2>} */}
				{/* {weather && <h2>{weather.weather[0].description}</h2>} */}
				{/* </div> */}
			</StyledWeather>
		</Card>
	);
}

export default Weather;

// <div className='weather-data'>
// 						<div className='search-box'>
// 							<input className='search-bar' type='text' placeholder='Search...' />
// 						</div>
//             {weather && <div className='location'>{weather.city}</div>}
//             <h1>{weather.name}</h1>
//             <h2>{ weather.main.temp}</h2>
//             <h2>{ weather.weather[0].description}</h2>
// 						<div className='location'>Hammond, La</div>
// 						<div className='weather-details'>
// 							{weather && <div className='temperature'>{weather.temp}</div>}
// 				{weather && <div className='condition'>{weather.description.general}</div>}
// 							<div className='temperature'>70°</div>
// 							<div className='condition'>Condition</div>

// const response = await fetch(`${api.base}weather?id=${api.city.id}&units=imperial&appid=${api.key}`);
// const data = await response.json();
// setWeather(data);
// console.log(data);

// const fetchWeather = async () => {
//   try {
//     const res = await axios.get(`${api.base}weather?id=${api.city.id}&units=imperial&appid=${api.key}`);
//     setIsLoading(false);
//     console.log(res.data);
//     // if (res.data) {
//     // 	setWeather(res.data);
//     // } else {
//     // 	console.log('Error.');
//     // }
//     res.data ? setWeather(res.data) : console.log('Error.');
//   } catch (error) {
//     setIsLoading(false);
//     console.log(error);
//   }
// };
