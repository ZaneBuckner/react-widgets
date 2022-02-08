import { useState, useEffect } from 'react';
import BobRossPaintingsData from 'components/widgets/bobross/BobRossPaintingsData';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import WidgetModal from '../WidgetModal';
import { About } from './BobRossModal';
import Painting from './Painting';

import { StyledBobRossPaintings } from './BobRossPaintings.Styed';

import BobRossIcon from 'Assets/BobRossIcon';
import { BiRefresh as RefreshIcon } from 'react-icons/bi';
import { BsYoutube as YoutubeIcon } from 'react-icons/bs';
import { HiCursorClick as ClickIcon } from 'react-icons/hi';

function BobRossPaintings() {
	const [painting, setPainting] = useState([]);
	const [isAboutModal, setIsAboutModal] = useState(false);

	const handleAboutToggle = () => setIsAboutModal(isAboutModal => !isAboutModal);

	const fetchPainting = () => {
		if (BobRossPaintingsData) {
			const random = Math.floor(Math.random() * 403);
			setPainting(BobRossPaintingsData[random]);
		}
	};

	useEffect(() => {
		fetchPainting();
	}, []);

	const hyperLink = (
		<a className='hyperlink' href={painting.youtube_src} target='_blank' rel='noopener noreferrer'>
			Season {painting.season} Episode {painting.episode}
			<YoutubeIcon className='icon' />
		</a>
	);

	return (
		<Card>
			<CardHeader
				name={painting.title}
				icon={<BobRossIcon />}
				widgetRef='bobross'
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<RefreshIcon className='action-icons' onClick={fetchPainting} />}
			/>

			<WidgetModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				element={
					<About
						widgetIcon={<BobRossIcon className='widget-icon' height={'1.5rem'} fill={'#DAB55D'} />}
						refreshIcon={<RefreshIcon className='icon' onClick={fetchPainting} />}
						clickIcon={<ClickIcon className='icon' onClick={handleAboutToggle} />}
						youtubeLink={hyperLink}
					/>
				}
			/>

			<StyledBobRossPaintings onDoubleClick={() => fetchPainting()}>
				<Painting painting={painting} icon={<BobRossIcon />} />
			</StyledBobRossPaintings>
		</Card>
	);
}

export default BobRossPaintings;
