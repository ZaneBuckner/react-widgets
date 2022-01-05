import { useState } from 'react';

import { StyledWeatherCurrent, CurrentConditions, SunData, AdditionalInfo } from './Weather.styled';

import { WiSunrise as SunriseIcon } from 'react-icons/wi';
import { WiSunset as SunsetIcon } from 'react-icons/wi';
import { WiFahrenheit as DegFIcon } from 'react-icons/wi';
import { FiWind as WindIcon } from 'react-icons/fi';
import { WiRaindrop as HumidityIcon } from 'react-icons/wi';
import { MdVisibility as VisibilityIcon } from 'react-icons/md';
// import * as weatherIcons from 'react-icons/wi';

function WeatherCurrent({ currentWeather }) {
	// currentWeather && console.log(currentWeather);

	const getFormattedTime = unixTime => {
		let date = new Date(unixTime * 1000);
		let hours = (date.getHours() + 24) % 12 || 12;
		let minutes = date.getMinutes();
		let meridian = date.getHours() < 12 ? 'AM' : 'PM';
		return `${hours}:${minutes} ${meridian}`;
	};

	const weatherIconSrc = data => `http://openweathermap.org/img/w/${data}.png`;

	return (
		<StyledWeatherCurrent>
			<h1>Hammond, US</h1>
			<CurrentConditions>
				<img src={weatherIconSrc(currentWeather.weather[0].icon)} alt='Current Weather Icon' />
				<h2>{currentWeather.weather[0].description}</h2>
			</CurrentConditions>
			<SunData>
				<div>
					<SunriseIcon />
					<p>{getFormattedTime(currentWeather.sunrise)}</p>
				</div>
				<div>
					<SunsetIcon />
					<p>{getFormattedTime(currentWeather.sunset)}</p>
				</div>
			</SunData>
			<AdditionalInfo>
				<div className='info-wrapper'>
					<p>Wind Speed</p>
					<div>
						<WindIcon />
					</div>
				</div>
				<div className='info-wrapper'>
					<p>Humidity</p>
					<div>
						<HumidityIcon />
					</div>
				</div>
				<div className='info-wrapper'>
					<p>Visibility</p>
					<div>
						<VisibilityIcon />
					</div>
				</div>
			</AdditionalInfo>
		</StyledWeatherCurrent>
	);
}

export default WeatherCurrent;
