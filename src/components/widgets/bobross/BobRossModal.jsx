import styled from 'styled-components';

import WidgetModal from '../WidgetModal';

import { HiCursorClick as ClickIcon } from 'react-icons/hi';
import { BsYoutube as YoutubeIcon } from 'react-icons/bs';

export function AboutModal({ open, onClose, widgetIcon, data, refreshIcon }) {
	const hyperLink = (
		<a className='hyperlink' href={data.youtube_src} target='_blank' rel='noopener noreferrer'>
			Season {data.season} Episode {data.episode}
			<YoutubeIcon className='icon' />
		</a>
	);

	const StyledClickIcon = <ClickIcon className='icon' onClick={onClose} />;

	return (
		<WidgetModal open={open} onClose={onClose}>
			<StyledIcon>{widgetIcon}</StyledIcon>
			<h1 className='header'>Bob Ross Paintings</h1>
			<h2 className='subheader'>"We don't make mistakes, just happy little accidents."</h2>
			<div className='body'>
				<p>Select {refreshIcon} for a random painting.</p>
				<p>Or double {StyledClickIcon} the image.</p>
			</div>
			<StyledFooter className='footer'>{hyperLink}</StyledFooter>
		</WidgetModal>
	);
}

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
