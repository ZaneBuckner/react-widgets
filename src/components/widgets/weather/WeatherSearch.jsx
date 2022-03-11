import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import WidgetSearch from '../WidgetSearch';

export default function WeatherSearch({ open, onToggle, onSelect, placeholder }) {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);

	const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

	/**
	 * [Country Code To Flag Emoji](https://dev.to/jorik/country-code-to-flag-emoji-a21)
	 *
	 * Takes a country code and determines each letter's [Regional Indicator Symbol](https://unicode-table.com/en/search/?q=Regional+Indicator+Symbol+Letter).
	 * Calculated by adding two UTF-16 codes, a reference offset (127397) and a letter (A), (127397 + A => 127397 + 65 => [Regional Indicator Symbol Letter A](https://unicode-table.com/en/1F1E6/).
	 * When ran twice for both letters, String.fromCodePoint( 🇺 + 🇸 ) => 🇺🇸
	 * @param {string} countryCode Two digit country code (eg. 'US').
	 * @returns Returns flag emoji.
	 * @example getCountryFlagEmoji('US') => 🇺🇸
	 */
	const getCountryFlagEmoji = countryCode => {
		const indexOffsetRef = 127397;
		const codePoints = countryCode.toUpperCase().split('').map(char => indexOffsetRef + char.charCodeAt()); // prettier-ignore
		return String.fromCodePoint(...codePoints);
	};

	const handleSelectedResult = result => {
		onSelect({
			city: result.name,
			state: result.state,
			country: regionNames.of(result.country),
			flag: getCountryFlagEmoji(result.country),
			lat: result.lat,
			lon: result.lon,
		});
		onToggle();
	};

	// RETRIEVES LOCATION COORDINATES (City, State) => GEO COORDS (LAT & LON)
	const fetchSearchResults = async query => {
		const api = {
			directGeocoding: `http://api.openweathermap.org/geo/1.0/direct?`,
			query: `q=${query}`,
			param: `&limit=5`,
			key: `&appid=${process.env.REACT_APP_WIDGET_WEATHER_API_KEY}`,
		};

		try {
			const fetchURL = `${api.directGeocoding}${api.query}${api.param}${api.key}`;
			const data = await axios.get(fetchURL);
			setResults(data.data);
		} catch (err) {
			console.log(err);
		}
	};

	// WHEN SEARCH INPUT CHANGES => FETCH RESULTS
	useEffect(() => search && fetchSearchResults(search), [search]);

	return (
		<WidgetSearch
			open={open}
			onToggle={onToggle}
			onChange={e => setSearch(e.target.value)}
			placeholder={placeholder}
		>
			<SearchResultsWrapper>
				{results &&
					results.map(result => (
						<SearchResult
							key={uuidv4()}
							value={result}
							onClick={() => handleSelectedResult(result)}
						>
							{result.state
								? `${result.name}, ${result.state} (${regionNames.of(result.country)})`
								: `${result.name} (${regionNames.of(result.country)})`}
						</SearchResult>
					))}
			</SearchResultsWrapper>
		</WidgetSearch>
	);
}

const SearchResultsWrapper = styled.ul`
	position: absolute;
	z-index: 2;
	top: 2rem;
	left: 0;
	padding: 0.2rem;

	display: grid;
	grid-template-rows: auto;
	grid-row-gap: 0.2rem;
	width: 100%;

	border-radius: 10px;
	background-color: rgb(45 45 45 / 30%);
	backdrop-filter: blur(5px) saturate(10%);
`;

const SearchResult = styled.li`
	padding: 0.2rem;

	font-family: 'Montserrat', serif;
	font-size: clamp(11px, 3.5vw, 15px);
	font-weight: 500;
	color: #c3c3c3;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	cursor: pointer;

	&:hover {
		color: #dab55d;
	}
`;
