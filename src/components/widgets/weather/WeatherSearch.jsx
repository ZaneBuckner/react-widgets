import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import WidgetSearch from '../WidgetSearch';
import { fetchSearchLocation, getCountryFlagEmoji } from 'utils/util';

export default function WeatherSearch({ open, onToggle, onSelect, placeholder }) {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);

	const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

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

	// WHEN SEARCH INPUT CHANGES => FETCH RESULTS
	useEffect(() => search && fetchSearchLocation(search, setResults), [search]);

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
