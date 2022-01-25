import { useContext } from 'react';
import { WidgetContext } from 'context/WidgetContext';

import Button from 'components/shared/Button';
import { BsChevronCompactLeft as NavLeft, BsChevronCompactRight as NavRight } from 'react-icons/bs';
import { StyledContainer, StyledToolbar, StyledWidgetWrapper } from './Toolbar.styled';

function Toolbar() {
	const { widgets, toggleDisplay } = useContext(WidgetContext);

	return (
		<StyledContainer>
			<NavLeft className='nav-icon left' />
			<StyledToolbar>
				{widgets.map(widget => (
					<StyledWidgetWrapper key={widget.id}>
						<Button animate onClick={() => toggleDisplay(widget.ref)}>
							{widget.icon}
						</Button>
						<h1>{widget.name}</h1>
					</StyledWidgetWrapper>
				))}
			</StyledToolbar>
			<NavRight className='nav-icon right' />
		</StyledContainer>
	);
}

export default Toolbar;
