import { useState, useEffect } from 'react';
import BobRossPaintingsData from 'components/widgets/bobross/BobRossPaintingsData';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import { AboutModal } from './BobRossModal';
import Painting from './Painting';

import { StyledBobRossPaintings } from './BobRossPaintings.Styed';

import BobRossIcon from 'Assets/BobRossIcon';
import { RefreshIcon } from 'Assets/WidgetIcons';

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

	// FETCH INITIAL PAINTING => ON MOUNT
	useEffect(() => fetchPainting(), []);

	// prettier-ignore
	const StyledRefreshIcon = <RefreshIcon removeBG width='1rem' height='1rem' color='#DAB55D' style={{ cursor: 'pointer' }} onClick={fetchPainting} />

	return (
		<Card>
			<CardHeader
				name={painting.title}
				icon={<BobRossIcon />}
				widgetRef='bobross'
				onAboutToggle={handleAboutToggle}
				onUtilityToggle={<RefreshIcon onClick={fetchPainting} />}
			/>

			<StyledBobRossPaintings onDoubleClick={() => fetchPainting()}>
				<Painting painting={painting} icon={<BobRossIcon />} />
			</StyledBobRossPaintings>

			<AboutModal
				open={isAboutModal}
				onClose={handleAboutToggle}
				widgetIcon={<BobRossIcon className='widget-icon' height='1.5rem' fill='#DAB55D' />}
				data={painting}
				refreshIcon={StyledRefreshIcon}
			/>
		</Card>
	);
}

export default BobRossPaintings;
