import { v4 as uuidv4 } from 'uuid';

import { Container } from '../../globalStyles';
import { StyledToolbar } from './Toolbar.styled';
import WidgetWrapper from './WidgetWrapper';

import CounterIcon from '../../Assets/CounterIcon';
import { FaRegAddressCard as UserProfileIcon } from 'react-icons/fa';
import { TiWeatherStormy as WeatherIcon } from 'react-icons/ti';
import CodewarsIcon from '../../Assets/CodewarsIcon';
import { MdTimer as TimerIcon } from 'react-icons/md';
import { BsCalendarDate as CalendarIcon } from 'react-icons/bs';
import { BsClock as ClockIcon } from 'react-icons/bs';
import { MdOutlineChecklistRtl as TodoIcon } from 'react-icons/md';
import { AiOutlineFontColors as FontIcon } from 'react-icons/ai';
import { AiOutlineBgColors as ColorIcon } from 'react-icons/ai';

const widgets = [
	{
		name: 'Calendar',
		icon: <CalendarIcon fill='#C3C3C3' />,
	},
	{
		name: 'Clock',
		icon: <ClockIcon fill='#C3C3C3' />,
	},
	{
		name: 'CodeWars',
		icon: <CodewarsIcon fill='#C3C3C3' />,
	},
	{
		name: 'Counter',
		icon: <CounterIcon fill='#C3C3C3' />,
	},
	{
		name: 'Timer',
		icon: <TimerIcon fill='#C3C3C3' />,
	},
	{
		name: 'User Profile',
		icon: <UserProfileIcon fill='#C3C3C3' />,
	},
	{
		name: 'Weather',
		icon: <WeatherIcon fill='#C3C3C3' />,
	},
	// {
	// 	name: 'To-Do',
	// 	icon: <TodoIcon fill='#C3C3C3' />,
	// },
	// {
	// 	name: 'Color Editor',
	// 	icon: <ColorIcon fill='#C3C3C3' />,
	// },
	// {
	// 	name: 'Font Editor',
	// 	icon: <FontIcon fill='#C3C3C3' />,
	// },
];

function Toolbar() {
	return (
		<Container>
			<StyledToolbar>
				{widgets.map(widget => (
					<WidgetWrapper key={uuidv4()} name={widget.name} icon={widget.icon}></WidgetWrapper>
				))}
			</StyledToolbar>
		</Container>
	);
}

export default Toolbar;
