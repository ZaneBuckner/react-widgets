import { useWidgetContext } from 'context/WidgetContext';

import Button from 'components/shared/Button';
import { BsChevronCompactLeft as NavLeft, BsChevronCompactRight as NavRight } from 'react-icons/bs';
import { StyledContainer, StyledToolbar, StyledWidgetWrapper } from './Toolbar.styled';

function Toolbar() {
	const { widgets, toggleDisplay } = useWidgetContext();

	return (
		<StyledContainer>
			<NavLeft className='nav-icon left' />
			<StyledToolbar>
				{widgets.map(widget => (
					<StyledWidgetWrapper key={widget.id}>
						<Button
							animate
							buttonState={widget.display}
							icon={widget.icon}
							onClick={() => toggleDisplay(widget.widgetRef)}
						/>
						<h1>{widget.name}</h1>
					</StyledWidgetWrapper>
				))}
			</StyledToolbar>
			<NavRight className='nav-icon right' />
		</StyledContainer>
	);
}

export default Toolbar;
