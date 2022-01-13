import useAxios from 'hooks/useAxios';
import { v4 as uuidv4 } from 'uuid';
import { StyledWeatherForecast } from './Weather.styled';

function WeatherForecast({ url, units, unitValues }) {
	const { data, loading, error } = useAxios(url);

	const getDailyForecast = () => {
		// GET EVERY ITEM INCREMENTED BY 24 HOURS
		const forecastItems = [];
		for (let i = 7; i < data.list.length; i += 8) {
			forecastItems.push(data.list[i]);
		}

		const formatForecastDay = unixTime => {
			const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			let date = new Date(unixTime * 1000);
			return weekdays[date.getDay()];
		};

		return forecastItems.map(item => (
			<div className='forecast-items' key={uuidv4()}>
				<h2 className='item-day'>{formatForecastDay(item.dt)}</h2>
				<img
					src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
					alt='Weather Icon'
				/>
				<p className='item-condition'>{item.weather[0].main}</p>
				<p className='item-temp'>
					{Math.floor(item.main.temp)} <span className='units'>{unitValues[units].temp}</span>
				</p>
			</div>
		));
	};

	const preRender = {
		loading: <p className='user-message'>Loading Weather Forecast...</p>,
		error: <p className='user-message'>Unable to find your location's forecast.</p>,
	};

	if (loading) return preRender.loading;
	if (error) return preRender.error;
	return <StyledWeatherForecast>{getDailyForecast()}</StyledWeatherForecast>;
}

export default WeatherForecast;
