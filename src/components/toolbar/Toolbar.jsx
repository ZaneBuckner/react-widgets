import { useWidgetContext } from 'context/WidgetContext';

import Button from 'components/shared/Button';
import { BsChevronCompactLeft as NavLeft, BsChevronCompactRight as NavRight } from 'react-icons/bs';
import { StyledContainer, StyledToolbar, StyledWidgetWrapper } from './Toolbar.styled';

// WIDGET ICONS
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';
import { BsClock as ClockIcon } from 'react-icons/bs';
import BobRossIcon from 'Assets/BobRossIcon';
import { MdOutlineChecklistRtl as TaskIcon } from 'react-icons/md';
import CounterIcon from 'Assets/CounterIcon';
import { CodewarsIcon } from 'Assets/WidgetIcons';

function Toolbar() {
	const { widgets, toggleDisplay } = useWidgetContext();

	const widgetIconRef = {
		weather: <WeatherIcon />,
		clock: <ClockIcon />,
		bobross: <BobRossIcon />,
		tasktracker: <TaskIcon />,
		counter: <CounterIcon />,
		codewars: <CodewarsIcon />,
	};

	return (
		<StyledContainer>
			<NavLeft className='nav-icon left' />
			<StyledToolbar>
				{widgets.map(widget => (
					<StyledWidgetWrapper key={widget.id}>
						<Button
							animate
							buttonState={widget.display}
							icon={widgetIconRef[widget.widgetRef]}
							onClick={() => toggleDisplay(widget.widgetRef)}
						/>
						<h1>{widget.title}</h1>
					</StyledWidgetWrapper>
				))}
			</StyledToolbar>
			<NavRight className='nav-icon right' />
		</StyledContainer>
	);
}

export default Toolbar;
