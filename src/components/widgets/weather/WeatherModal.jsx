import styled from 'styled-components';

import Button from 'components/shared/Button';

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
					size='medium'
					className={`${units !== 'imperial' && 'clickable'}`}
					buttonState={units === 'imperial' && true}
					onClick={() => setUnits('imperial')}
					text='&deg;F'
				/>
				<Button
					animate
					size='medium'
					className={`${units !== 'metric' && 'clickable'}`}
					buttonState={units === 'metric' && true}
					onClick={() => setUnits('metric')}
					text='&deg;C'
				/>
				<Button
					animate
					size='medium'
					className={`${units !== 'standard' && 'clickable'}`}
					buttonState={units === 'standard' && true}
					onClick={() => setUnits('standard')}
					text='SI Units'
				/>
			</StyledButtonGroup>
		</>
	);
}

const StyledButtonGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 1rem;
	grid-area: 2 / 1 / 5 / 2;

	font-weight: 500;

	.clickable {
		color: #c3c3c3;
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
