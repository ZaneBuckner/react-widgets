import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CodewarsIcon from 'Assets/CodewarsIcon';
import CounterIcon from 'Assets/CounterIcon';
import { AiOutlineBgColors as ColorIcon, AiOutlineFontColors as FontIcon } from 'react-icons/ai';
import { BsCalendarDate as CalendarIcon, BsClock as ClockIcon } from 'react-icons/bs';
import { FaRegAddressCard as UserProfileIcon } from 'react-icons/fa';
import { MdOutlineChecklistRtl as TodoIcon, MdTimer as TimerIcon } from 'react-icons/md';
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
	const [widgets, setWidgets] = useState([
		{
			id: uuidv4(),
			name: 'Calendar',
			icon: <CalendarIcon />,
			ref: 'calendar',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'Clock',
			icon: <ClockIcon />,
			ref: 'clock',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'CodeWars',
			icon: <CodewarsIcon />,
			ref: 'codewars',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'Counter',
			icon: <CounterIcon />,
			ref: 'counter',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'Timer',
			icon: <TimerIcon />,
			ref: 'timer',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'User Profile',
			icon: <UserProfileIcon />,
			ref: 'userProfile',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'Weather',
			icon: <WeatherIcon />,
			ref: 'weather',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'To-Do',
			icon: <TodoIcon />,
			ref: 'todo',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'Color Editor',
			icon: <ColorIcon />,
			ref: 'colorEditor',
			state: false,
		},
		{
			id: uuidv4(),
			name: 'Font Editor',
			icon: <FontIcon />,
			ref: 'fontEditor',
			state: false,
		},
	]);

	return <WidgetContext.Provider value={[widgets, setWidgets]}>{children}</WidgetContext.Provider>;
};
