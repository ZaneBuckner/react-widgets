import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import { getFormattedTime } from 'utils/util';

import { StyledWeatherCurrent } from './Weather.styled';

import { MdVisibility as VisibilityIcon } from 'react-icons/md';
import {
	WiRaindrop as HumidityIcon,
	WiStrongWind as WindSpeedIcon,
	WiSunrise as SunriseIcon,
	WiSunset as SunsetIcon,
} from 'react-icons/wi';

function WeatherCurrent({ url, userInput, units, unitValues, setFetchedTime }) {
	const { data, loading, error } = useAxios(url);

	useEffect(() => {
		data && setFetchedTime(getFormattedTime(data.dt));
	}, [data, setFetchedTime]);

	const getDayLength = (start, end) => {
		const sunrise = getFormattedTime(start);
		const sunset = getFormattedTime(end);

		return (
			<>
				<div className='sunrise'>
					<SunriseIcon />
					<p>{`${sunrise.hours}:${sunrise.minutes} ${sunrise.meridian}`}</p>
				</div>
				<div className='sunset'>
					<SunsetIcon />
					<p>{`${sunset.hours}:${sunset.minutes} ${sunset.meridian}`}</p>
				</div>
			</>
		);
	};

	const getCurrentConditions = () => {
		const formatDescritpion = str => {
			return str
				.split(' ')
				.map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
				.join(' ');
		};

		return (
			<>
				<img
					src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					alt='Weather Icon'
				/>
				<p>{formatDescritpion(data.weather[0].description)}</p>
				<p className='temp'>
					{Math.round(data.main.temp)} <span className='units'>{unitValues[units].temp}</span>
				</p>
			</>
		);
	};

	const additionalConditions = (type, icon, value, input) => {
		let unit = unitValues[units][input];

		return (
			<div className='condition-wrapper'>
				<h2>{type}</h2>
				<div className='details'>
					{icon}
					<p>
						{value} <span className='units'>{unit}</span>
					</p>
				</div>
			</div>
		);
	};

	const preRender = {
		loading: <p className='user-message'>Loading Current Weather...</p>,
		error: (
			<p className='user-message'>
				Unable to find weather data for <span>{userInput}</span>.<br /> Please check your spelling
				or limit your search to a <span>City Name</span> or a <span>ZIP code</span>.
			</p>
		),
	};

	if (loading) return preRender.loading;
	if (error) return preRender.error;
	return (
		<StyledWeatherCurrent>
			<h1 className='city'>{data.name}</h1>
			<div className='current-conditions'>{getCurrentConditions()}</div>
			<div className='day-length'>{getDayLength(data.sys.sunrise, data.sys.sunset)}</div>
			<div className='additional-conditions'>
				{additionalConditions('Wind Speed', <WindSpeedIcon />, data.wind.speed, 'speed')}
				{additionalConditions('Humidity', <HumidityIcon />, data.main.humidity, 'percent')}
				{additionalConditions('Visibility', <VisibilityIcon />, data.visibility, 'distance')}
			</div>
		</StyledWeatherCurrent>
	);
}

export default WeatherCurrent;
