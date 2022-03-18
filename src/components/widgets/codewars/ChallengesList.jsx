import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import styled from 'styled-components';

import UserAlert from 'components/shared/UserAlerts';

export default function ChallengesList({ url, onSelect, loader, username }) {
	const { data, loading, error } = useAxios(url);

	// RESET SELECTED CHALLENGE => WHEN A USERNAME IS SEARCHED
	useEffect(() => username && onSelect(null), [username]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<StyledChallengesList>
			{loading && <StyledChallengesList>{loader}</StyledChallengesList>}
			{error && <UserAlert variant='error' message='Challenges Not Found' />}
			{data && !error && (
				<>
					<h1>Challenges</h1>
					<ul className='overflow-y-fade'>
						{data.data.map(challenge => (
							<li key={challenge.id} onClick={() => onSelect(challenge)}>
								{challenge.name}
							</li>
						))}
					</ul>
				</>
			)}
		</StyledChallengesList>
	);
}

const StyledChallengesList = styled.div`
	max-width: 30rem;
	overflow-y: auto;

	h1 {
		font-size: 1.6em;
		font-weight: 300;
		text-align: center;
	}

	ul {
		width: 100%;
		height: 100%;
		padding: 0.5rem;

		li {
			font-size: 1.2em;
			font-weight: 400;
			white-space: nowrap;

			overflow-x: hidden;
			text-overflow: ellipsis;

			&:hover {
				cursor: pointer;
				color: #dab55d;
			}
		}
	}
`;
