import { StyledPainting } from './BobRossPaintings.Styed';
import tealFrame from 'Assets/Images/tealFrame.png';

function Painting({ painting, icon }) {
	if (!painting) {
		return <div className='alt-display'>{icon}</div>;
	}
	return (
		<StyledPainting>
			<img className='painting-frame' src={tealFrame} alt='Teal Frame' />
			<img className='painting-image' src={painting.img_src} alt='Bob Ross Painting' />
		</StyledPainting>
	);
}

export default Painting;
