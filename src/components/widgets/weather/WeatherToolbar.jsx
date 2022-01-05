import { useState } from 'react';
import { StyledWeatherToolbar, StyledUserInput } from './Weather.styled';

import { BiSearch as SearchIcon } from 'react-icons/bi';

function WeatherToolbar({ setUserInput, iconStyles }) {
	const handleUserInput = e => {
		setUserInput(e.target.value);
	};

	return (
		<StyledWeatherToolbar>
			<SearchIcon style={iconStyles} />
			<StyledUserInput type='text' onChange={handleUserInput} />
		</StyledWeatherToolbar>
	);
}

export default WeatherToolbar;
