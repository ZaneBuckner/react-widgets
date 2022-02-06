import styled from 'styled-components';

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
			<h1 className='header'>Analogue Clock</h1>
			<div className='body'>
				<p>
					A {hyperLink} is defined as the number of milliseconds since midnight on January 1, 1970,
					UTC.
				</p>
			</div>
			<div className='footer'>
				<p>
					{javaScriptTime} ms ➤ {unixTime} s
				</p>
			</div>
		</>
	);
}
