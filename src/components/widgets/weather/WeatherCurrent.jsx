import { useState, useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import { getFormattedTime, fetchLocationFromCoords } from 'utils/util';

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
	const [weatherLocation, setWeatherLocation] = useState('');
	const [description, setDescription] = useState('');

	const DayLength = ({ icon, time }) => {
		const { hours, minutes, meridian } = getFormattedTime(time);

		return (
			<div>
				{icon}
				<p>{`${hours}:${minutes} ${meridian}`}</p>
			</div>
		);
	};

	const Condition = ({ icon, type, value, input }) => {
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

	// SET VALUES => ON MOUNT & WHEN DATA CHANGES
	useEffect(() => {
		if (data) {
			const { lat, lon } = data.coord;
			const description = data.weather[0].description.split(' ').map(word => {
				return `${word[0].toUpperCase()}${word.substring(1)}`;
			});

			fetchLocationFromCoords(lat, lon, setWeatherLocation);
			setDescription(description.join(' '));
			setFetchedTime(getFormattedTime(data.dt * 1000));
		}
	}, [data, setFetchedTime]);

	if (loading) {
		return <p className='user-message'>Loading Current Weather...</p>;
	}

	if (error) {
		return (
			<p className='user-message'>
				Unable to find weather data for <span>{userInput}</span>.<br /> Please check your spelling
				or limit your search to a <span>City Name</span> or a <span>ZIP code</span>.
			</p>
		);
	}

	return (
		<StyledWeatherCurrent>
			<h1 className='city'>{`${weatherLocation.city}, ${weatherLocation.state}`}</h1>
			<div className='current-conditions'>
				<img
					src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					alt='Weather Icon'
				/>
				<p>{description}</p>
				<p className='temp'>
					{Math.round(data.main.temp)} <span className='units'>{unitValues[units].temp}</span>
				</p>
			</div>
			<div className='day-length'>
				<DayLength className='sunrise' icon={<SunriseIcon />} time={data.sys.sunrise * 1000} />
				<DayLength className='sunset' icon={<SunsetIcon />} time={data.sys.sunset * 1000} />
			</div>
			<div className='additional-conditions'>
				<Condition
					icon={<WindSpeedIcon />}
					type={'Wind Speed'}
					value={data.wind.speed}
					input={'speed'}
				/>
				<Condition
					icon={<HumidityIcon />}
					type={'Humidity'}
					value={data.main.humidity}
					input={'percent'}
				/>
				<Condition
					icon={<VisibilityIcon />}
					type={'Visibility'}
					value={data.visibility}
					input={'distance'}
				/>
			</div>
		</StyledWeatherCurrent>
	);
}

export default WeatherCurrent;
