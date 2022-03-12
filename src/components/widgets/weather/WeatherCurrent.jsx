import { useState, useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import styled from 'styled-components';

import { getFormattedTime, getFormattedUTCTime, getLocationTimeOfDay } from 'utils/util';
import { getWeatherIcon } from './weatherIcons';
import 'weather-icons/css/weather-icons.min.css';
import 'weather-icons/css/weather-icons-wind.min.css';

// prettier-ignore
export default function WeatherCurrent({ location, fetchURL, unitsRef, weatherUnits, loader, setFetchedAt, setLocationTimeValues }) {
  const { data, loading, error } = useAxios(fetchURL);
	const [weather, setWeather] = useState(null);
	const [weatherIcon, setWeatherIcon] = useState(null);

	const DayLength = ({ icon, time }) => {
		const { hours, minutes, meridian } = time;

		return (
			<div>
				{icon}
				<p>{`${hours}:${minutes}`} <span>{meridian}</span></p>
			</div>
		);
	};

	const Condition = ({ title, icon, value, unit }) => {
		return (
			<div>
				<div className='title-wrapper'>
					{icon}
					<h2 className='title'>{title}</h2>
				</div>
				<div className='value-wrapper'>
					<h3 className='value'>{value}</h3>
					<span className='units'>{unitsRef[weatherUnits][unit]}</span>
				</div>
			</div>
		);
	};

	// SET FORMATTED WEATHER DATA => WHEN DATA IS AVAILABLE
	useEffect(() => {
		if (!data) return;

		(() => {
			const { dt: currentTime, sunrise, sunset } = data.current;

			// DETERMINE TIME OF DAY => RETRIEVE WEATHER ICON VARIANT
			const currentTimeOfDay = getLocationTimeOfDay(currentTime, sunrise, sunset, data.timezone_offset);
			setWeatherIcon(getWeatherIcon(currentTimeOfDay, data.current.weather[0].id));

			// PROVIDES TIME OF FETCHED DATA => RECIEVED BY <AboutModal />
			const { hours, minutes, meridian } = getFormattedTime(currentTime * 1000);
			setFetchedAt(`${hours}:${minutes} ${meridian}`);

			// PROVIDES LOCATION SUNRISE, SUNSET, & TIMEZONE OFFSET => RECIEVED BY <WeatherForecast />
			setLocationTimeValues({ sunrise: sunrise, sunset: sunset, timezoneOffset: data.timezone_offset });
		})();

		// FORMAT WEATHER DESCRIPTION ('clear sky') => ('Clear Sky')
		const formatWeatherDescription = words => words.split(' ').map(word => `${word[0].toUpperCase()}${word.substring(1)}`);

		// FORMAT WIND DIRECTION (45) => ('ne')
		const formatWindDirection = degrees => {
      // 360 DEG => 16 POINTS => 22.5 DEG SEGMENTS => [0, 15] INDEX RANGE RETURN
			const cardinalRef = ['n', 'nne', 'ne', 'ene', 'e', 'ese', 'se', 'sse', 's', 'ssw', 'sw', 'wsw', 'w', 'wnw', 'nw', 'nnw'];
			return cardinalRef[Math.floor(degrees / 22.5) % 16];
		};

		// FORMAT LOCATION STRING BASED ON AVAILABLE DATA
		const formatLocation = countryRef => {
      const { city, state, flag } = location;

      const cityEl = <h1>{city} &nbsp;{flag}</h1>
      const cityStateEl = <h1>{city} &nbsp;<span>{state}</span> {flag}</h1>;
      const cityStateFlagEl = <h1>{city} &nbsp;<span>{state}</span> {flag}</h1>;

      if (countryRef === undefined) return cityStateEl;
      else if (countryRef === 'United States') return cityStateEl;
      else return location?.state ? cityStateFlagEl : cityEl;
		};

		setWeather({
      // aa_SOURCE_DATA: data,
			location: formatLocation(location.country),
			description: formatWeatherDescription(data.current.weather[0].description).join(' '),
			sunrise: getFormattedUTCTime((data.current.sunrise + data.timezone_offset) * 1000),
			sunset: getFormattedUTCTime((data.current.sunset + data.timezone_offset) * 1000),
      temp: Math.round(data.current.temp),
      uvi: {
        value: data.current.uvi,
        icon: <i className={`wi-gold wi wi-barometer`} style={{ fontSize: '1.1rem' }} />,
      },
			wind: {
        value: Math.round(data.current.wind_speed),
				icon: <i className={`wi-gold wi wi-wind wi-towards-${formatWindDirection(data.current.wind_deg)}`} style={{ fontSize: '1.2rem' }}/>,
			},
      humidity: {
        value: data.current.humidity,
        icon: <i className={`wi-gold wi wi-humidity`} style={{ fontSize: '1rem' }} />,
      },
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	if (loading) return loader;
	if (error) return console.log(error);

	if (weather) return (
		<StyledWeatherCurrent>
			<StyledOverview>
        <div className='location-wrapper'>
          {weather.location}
        </div>
				<div className='summary-wrapper'>
					{weatherIcon}
					<p>{weather.temp}{unitsRef[weatherUnits].temp}</p>
					<p className='description'>{weather.description}</p>
				</div>
				<div className='daylength-wrapper'>
					<DayLength icon={<i className={`wi-gold wi wi-sunrise`} />} time={weather.sunrise} />
					<DayLength icon={<i className={`wi-gold wi wi-sunset`} />} time={weather.sunset} />
				</div>
			</StyledOverview>

			<StyledConditions>
				<Condition title='Wind' icon={weather.wind.icon} value={weather.wind.value} unit='speed' />
				<Condition title='Humidity' icon={weather.humidity.icon} value={weather.humidity.value} unit='percent' />
				<Condition title='UV Index' icon={weather.uvi.icon} value={weather.uvi.value} unit='' />
			</StyledConditions>
		</StyledWeatherCurrent>
	);
}

const StyledWeatherCurrent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;

	.wi-gold {
		color: #dab55d;
	}

	.wi-units {
		color: #c3c3c3;
	}
`;

const StyledOverview = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	font-size: clamp(20px, 4vw, 25px);

	.location-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
		overflow: hidden;

		h1 {
			font-size: inherit;
			font-weight: 300;
			white-space: nowrap;
			overflow-x: scroll;

			span {
				font-size: 0.8em;
				font-weight: 300;
			}
		}
	}

	.summary-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr auto;
		align-items: center;
		justify-items: center;
		grid-column-gap: 1rem;

		font-size: 0.75em;
		font-weight: 300;
		white-space: nowrap;

		/* LONG DESCRIPTION: Thunderstorm With Light Drizzle */

		.wi-gold {
			font-size: 1.3em;
		}

		.description {
		}
	}

	.daylength-wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		align-items: center;
		justify-items: center;
		grid-column-gap: 1rem;

		div {
			display: grid;
			grid-template-columns: repeat(2, auto);
			align-items: center;
			justify-items: center;
			grid-column-gap: 0.5rem;

			.wi {
				font-size: 1rem;
			}

			p {
				font-size: 1rem;
				font-weight: 300;
				color: #c3c3c3;
			}

			span {
				font-size: 0.8rem;
				font-weight: 300;
			}
		}
	}
`;

const StyledConditions = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 5px;
	align-items: center;
	justify-items: center;
	width: 100%;

	font-size: clamp(8px, 1.5vw, 10px);

	div {
		display: grid;
		grid-template-rows: repeat(2, auto);
		grid-row-gap: 0.2rem;
		width: 100%;
		max-width: 10rem;
	}

	.title-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;

		.title {
			margin-left: 0.3rem;
			font-weight: 300;
			text-transform: uppercase;
		}
	}

	.value-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.4rem;

		background-color: rgb(65 65 65);
		border-radius: 10px;

		.value {
			margin-right: 0.3rem;
			font-size: 1.8em;
			font-weight: 400;
		}

		.units {
			font-size: 1.4em;
			font-weight: 300;
		}
	}
`;
