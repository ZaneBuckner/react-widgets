import { useState, useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { getWeatherIcon } from './weatherIcons';
import { getFormattedDate, getFormattedUTCTime, getLocationTimeOfDay } from 'utils/util';
import 'weather-icons/css/weather-icons.min.css';

// prettier-ignore
export default function WeatherForecast({ fetchURL, unitsRef, weatherUnits, forecastUnits, loader, locationTimeValues, }) {
  const { data, loading, error } = useAxios(fetchURL);
	const [forecast, setForecast] = useState(null);
  
  // SET FORMATTED FORCAST DATA => WHEN DATA IS AVAILABLE || FORECAST UNITS CHANGE
	useEffect(() => {
    if (!data) return;

		const collection = [];
    
    for (let i = 1; i < 6; i++) {
      const currentItem = data[`${forecastUnits}`][i];
      const { sunrise, sunset, timezoneOffset } = locationTimeValues;
      
      // DETERMINE TIME OF DAY => RETRIEVE WEATHER ICON VARIANT
      const locationTimeOfDay = getLocationTimeOfDay(currentItem.dt, sunrise, sunset, timezoneOffset);
      const weatherIcon = getWeatherIcon(locationTimeOfDay, currentItem.weather[0].id);

      // FORMAT TEMP & TITLE BASED ON FORECAST UNITS (DAILY || HOURLY)
      const { week } = getFormattedDate(currentItem.dt * 1000);
      const { hours, meridian } = getFormattedUTCTime((currentItem.dt + timezoneOffset) * 1000);
      const formatConditionalTitle = forecastUnits === 'daily' ? <h2 className='title'>{week}</h2> : <h2 className='title'>{hours} <span>{meridian}</span></h2>
      const formatConditionalTemp = Math.floor(forecastUnits === 'daily' ? currentItem.temp.day : currentItem.temp);

      collection.push({
        // aa_SOURCE_DATA: currentItem,
        icon: weatherIcon,
        temp: formatConditionalTemp,
        title: formatConditionalTitle,
        description: currentItem.weather[0].main,
        chanceOfRain: currentItem?.rain && `${(currentItem.pop * 100).toFixed(0)}\u0025`,
      });
    }

    setForecast(collection);
    
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, forecastUnits]);

	if (loading) return loader;
  if (error) return console.log(error);

	if (forecast) return (
		<StyledWeatherForecast>
			{!loading && forecast && forecast.map(item => (
					<StyledForecastDay key={uuidv4()}>
						{item.title}
						<div className='value-wrapper'>
							{item.icon}
              <h3 className='description'>{item.description}</h3>
              {item?.chanceOfRain && (
                <div className='rain-chance'>
                  <h4>{item.chanceOfRain}</h4>
                </div>
              )}
              <h3 className='temp'>{item.temp}{unitsRef[weatherUnits].temp}</h3>
						</div>
					</StyledForecastDay>
      ))}
		</StyledWeatherForecast>
	);
}

const StyledWeatherForecast = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 5px;
	width: 100%;

	.wi-gold {
		font-size: 1.5rem;
		color: #dab55d;
	}
`;

const StyledForecastDay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	font-size: clamp(10px, 4.3vw, 17px);

	.title {
		font-size: inherit;
		font-weight: 300;
		color: #c3c3c3;
		text-transform: uppercase;

		span {
			font-size: 0.8em;
			font-weight: 300;
		}
	}

	.value-wrapper {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		max-width: 5rem;
		height: 7.5rem;
		padding: 0.2rem 0;

		background-color: rgb(65 65 65);
		border-radius: 10px;

		.description {
			font-size: 1em;
			font-weight: 400;
		}

		.temp {
			font-size: 1.2em;
			font-weight: 400;
			white-space: nowrap;

			.units {
				font-size: 1rem;
				font-weight: 300;
			}
		}

		.rain-chance {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;

			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 0.9rem;

			border: 1px solid #22222222;
			background: #2b2b2b;
			border-radius: 0 0 10px 10px;

			h4 {
				font-size: clamp(8px, 1.6vw, 15px);
				font-weight: 500;
				color: #dab55d8c;
				text-align: center;
			}
		}
	}
`;
