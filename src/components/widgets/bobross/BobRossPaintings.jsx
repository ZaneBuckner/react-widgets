import { useState } from 'react';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';
import { StyledBobRossPaintings } from './BobRossPaintings.Styed';

import BobRossIcon from 'Assets/BobRossIcon';

function BobRossPaintings() {
	const [showModal, setShowModal] = useState(false);

	return (
		<Card>
			<CardHeader
				name='Bob Ross Paintings'
				icon={<BobRossIcon />}
				widgetRef='bobross'
				setShowModal={setShowModal}
			/>
			<StyledBobRossPaintings>
				<h1>Bob Ross Paintings</h1>
			</StyledBobRossPaintings>
		</Card>
	);
}

export default BobRossPaintings;
