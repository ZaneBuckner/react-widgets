import { useContext } from 'react';
import { WidgetContext } from 'context/WidgetContext';

import Button from 'components/shared/Button';
import { BsChevronCompactLeft as NavLeft, BsChevronCompactRight as NavRight } from 'react-icons/bs';
import {
	StyledContainer,
	StyledToolbarNav,
	StyledToolbar,
	StyledWidgetWrapper,
} from './Toolbar.styled';

function Toolbar() {
	const [widgets, setWidgets] = useContext(WidgetContext);

	const handleWidgetClick = widget => {
		console.log(widget);
	};

	return (
		<StyledContainer>
			<StyledToolbarNav>
				<NavLeft className='nav-left' />
			</StyledToolbarNav>
			<StyledToolbar>
				{widgets.map(widget => (
					<StyledWidgetWrapper key={widget.id}>
						<Button onClick={() => handleWidgetClick(widget)}>{widget.icon}</Button>
						<h1>{widget.name}</h1>
					</StyledWidgetWrapper>
				))}
			</StyledToolbar>
			<StyledToolbarNav>
				<NavRight className='nav-right' />
			</StyledToolbarNav>
		</StyledContainer>
	);
}

export default Toolbar;
