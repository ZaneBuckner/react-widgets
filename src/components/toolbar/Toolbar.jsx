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
	const { widgets, toggleDisplay } = useContext(WidgetContext);

	return (
		<StyledContainer>
			<StyledToolbarNav>
				<NavLeft className='nav-left' />
			</StyledToolbarNav>
			<StyledToolbar>
				{widgets.map(widget => (
					<StyledWidgetWrapper key={widget.id}>
						<Button onClick={() => toggleDisplay(widget.ref)}>{widget.icon}</Button>
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
