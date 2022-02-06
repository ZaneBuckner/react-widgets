import styled from 'styled-components';

const StyledIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	margin: 1rem;
`;

const StyledFooter = styled.div`
	svg {
		margin-left: 1rem;
	}
`;

export function About({ widgetIcon, refreshIcon, clickIcon, youtubeLink }) {
	return (
		<>
			<StyledIcon>{widgetIcon}</StyledIcon>
			<h1 className='header'>Bob Ross Paintings</h1>
			<h2 className='subheader'>"We don't make mistakes, just happy little accidents."</h2>
			<div className='body'>
				<p>Select {refreshIcon} for a random painting.</p>
				<p>Or double {clickIcon} the image.</p>
			</div>
			<StyledFooter className='footer'>{youtubeLink}</StyledFooter>
		</>
	);
}
