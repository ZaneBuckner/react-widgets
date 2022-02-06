import styled from 'styled-components';

const StyledBody = styled.div`
	grid-area: 2 / 1 / 4 / 2;
`;

const StyledFooter = styled.div`
	grid-area: 4 / 1 / 5 / 2;
`;

const hyperLink = (
	<a
		href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date'
		target='_blank'
		rel='noopener noreferrer'
		className='hyperlink'
	>
		JavaScript Date Object
	</a>
);

export function About({ widgetIcon, javaScriptTime, unixTime }) {
	return (
		<>
			{widgetIcon}
			<h1 className='header'>Simple Clock</h1>
			<StyledBody className='body'>
				<p>
					A {hyperLink} is defined as the number of milliseconds since midnight on January 1, 1970,
					UTC.
				</p>
			</StyledBody>
			<StyledFooter className='footer'>
				<p>
					{javaScriptTime} ms ➤ {unixTime} s
				</p>
			</StyledFooter>
		</>
	);
}
