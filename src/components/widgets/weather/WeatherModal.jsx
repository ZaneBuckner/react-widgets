import styled from 'styled-components';

import Button from 'components/shared/Button';

const StyledButtonGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 1rem;
	grid-area: 2 / 1 / 5 / 2;

	button {
		width: 9rem;
	}
`;

const hyperLink = (
	<a
		className='hyperlink'
		href='https://openweathermap.org/'
		target='_blank'
		rel='noopener noreferrer'
	>
		OpenWeather APIs
	</a>
);

export function About({ widgetIcon, settingsIcon, fetchedTime }) {
	return (
		<>
			{widgetIcon}
			<h1 className='header'>Weather Dashboard</h1>
			<h2 className='subheader'>Rainy Weather && Hacking</h2>
			<div className='body'>
				<p>Select {settingsIcon} to change the units.</p>
			</div>
			<div className='footer'>
				Last Updated: {`${fetchedTime.hours}:${fetchedTime.minutes} ${fetchedTime.meridian}`}
				{hyperLink}
			</div>
		</>
	);
}

export function Utility({ widgetIcon, units, setUnits }) {
	return (
		<>
			{widgetIcon}
			<h1 className='header'>Units</h1>
			<StyledButtonGroup>
				<Button
					animate
					buttonState={units === 'imperial' && true}
					onClick={() => setUnits('imperial')}
					children='&deg;F'
				/>
				<Button
					animate
					buttonState={units === 'metric' && true}
					onClick={() => setUnits('metric')}
					children='&deg;C'
				/>
				<Button
					animate
					buttonState={units === 'standard' && true}
					onClick={() => setUnits('standard')}
					children='SI Units'
				/>
			</StyledButtonGroup>
		</>
	);
}
