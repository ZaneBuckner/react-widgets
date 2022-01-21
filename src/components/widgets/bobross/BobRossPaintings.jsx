import { useState, useEffect } from 'react';
import BobRossPaintingsData from 'components/widgets/bobross/BobRossPaintingsData';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import Painting from './Painting';

import { StyledBobRossPaintings } from './BobRossPaintings.Styed';

import BobRossIcon from 'Assets/BobRossIcon';
import { BiRefresh as RefreshIcon } from 'react-icons/bi';
import { BsYoutube as YoutubeIcon } from 'react-icons/bs';

function BobRossPaintings() {
	const [painting, setPainting] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const fetchPainting = () => {
		if (BobRossPaintingsData) {
			const random = Math.floor(Math.random() * 403);
			setPainting(BobRossPaintingsData[random]);
		}
	};

	useEffect(() => {
		fetchPainting();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Card>
			<CardHeader
				name={painting.title}
				icon={<BobRossIcon />}
				widgetRef='bobross'
				setShowModal={setShowModal}
				utilityModal={
					<RefreshIcon
						title='New Painting'
						className='action-icons'
						aria-label='Open Widget Modal'
						onClick={() => fetchPainting()}
					/>
				}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<BobRossIcon width={25} height={25} fill={'#DAB55D'} />
				<h1 className='modal-title'>Bob Ross Paintings</h1>
				<h2 className='modal-description'>
					"We don't make mistakes, just happy little accidents."
				</h2>
				<p className='modal-usage'>
					For a random painting, select the {<RefreshIcon onClick={() => fetchPainting()} />} icon.
				</p>
				<p className='modal-footer'>
					{painting.title}
					<br />
					Season {painting.season} Episode {painting.episode}
					<a href={painting.youtube_src} target='_blank' rel='noopener noreferrer'>
						<YoutubeIcon />
					</a>
				</p>
			</Modal>
			<StyledBobRossPaintings>
				<Painting painting={painting} icon={<BobRossIcon />} />
			</StyledBobRossPaintings>
		</Card>
	);
}

export default BobRossPaintings;
