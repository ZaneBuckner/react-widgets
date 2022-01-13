import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CodewarsIcon from 'Assets/CodewarsIcon';
import CounterIcon from 'Assets/CounterIcon';
import { BsCalendarDate as CalendarIcon, BsClock as ClockIcon } from 'react-icons/bs';
import { MdOutlineChecklistRtl as TodoIcon, MdTimer as TimerIcon } from 'react-icons/md';
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';

export const WidgetContext = createContext();

export const WidgetContextProvider = ({ children }) => {
	const [widgets, setWidgets] = useState([
		{
			id: uuidv4(),
			name: 'Calendar',
			icon: <CalendarIcon />,
			ref: 'calendar',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Clock',
			icon: <ClockIcon />,
			ref: 'clock',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'CodeWars',
			icon: <CodewarsIcon />,
			ref: 'codewars',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Counter',
			icon: <CounterIcon />,
			ref: 'counter',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Timer',
			icon: <TimerIcon />,
			ref: 'timer',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Weather',
			icon: <WeatherIcon />,
			ref: 'weather',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'To-Do',
			icon: <TodoIcon />,
			ref: 'todo',
			display: true,
		},
	]);

	const toggleDisplay = ref => {
		// Create shallow copy. Define target widget index. Toggle widget display property. Set new widgets object.
		let updatedWidgets = [...widgets];
		let index = updatedWidgets.findIndex(widget => widget.ref === ref);
		updatedWidgets[index] = { ...updatedWidgets[index], display: !updatedWidgets[index].display };
		setWidgets(updatedWidgets);
	};

	const currentDisplay = ref => {
		return widgets.filter(widget => widget.ref === ref)[0].display;
	};

	return (
		<WidgetContext.Provider
			value={{
				widgets,
				toggleDisplay,
				currentDisplay,
			}}
		>
			{children}
		</WidgetContext.Provider>
	);
};
