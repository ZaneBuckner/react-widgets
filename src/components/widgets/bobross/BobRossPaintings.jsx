import { useState, useEffect } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import { StyledBobRossPaintings } from './BobRossPaintings.Styed';
import bronzeFrame from 'Assets/Images/bronze-frame.png';

import BobRossIcon from 'Assets/BobRossIcon';
import { BiRefresh as RefreshIcon } from 'react-icons/bi';

function BobRossPaintings() {
	const [painting, setPainting] = useState('');
	const [showModal, setShowModal] = useState(false);

	const getPaintingURL = () => {
		let rand = Math.floor(Math.random() * 282);
		setPainting(`https://www.twoinchbrush.com/images/painting${rand}.png`);
	};

	useEffect(() => {
		getPaintingURL();
	}, []);

	return (
		<Card>
			<CardHeader
				name='Bob Ross Paintings'
				icon={<BobRossIcon />}
				widgetRef='bobross'
				setShowModal={setShowModal}
				utilityModal={
					<RefreshIcon
						title='New Painting'
						className='action-icons'
						aria-label='Open Widget Modal'
						onClick={() => getPaintingURL()}
					/>
				}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<BobRossIcon width={25} height={25} fill={'#DAB55D'} />
				<h1 className='modal-title'>Bob Ross Paintings</h1>
				<h2 className='modal-description'>
					"We don't make mistakes, just happy little accidents."
				</h2>
				<p className='modal-usage'>For a new painting, select the {<RefreshIcon />} icon.</p>
			</Modal>
			<StyledBobRossPaintings>
				<div className='painting-wrapper'>
					<img className='painting-frame' src={bronzeFrame} alt='' />
					{painting && <img className='painting-image' src={painting} alt='' />}
				</div>
			</StyledBobRossPaintings>
		</Card>
	);
}

export default BobRossPaintings;
