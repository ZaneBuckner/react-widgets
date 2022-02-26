import { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

// WIDGET ICONS
import { BsClock as ClockIcon } from 'react-icons/bs';
import { TiWeatherPartlySunny as WeatherIcon } from 'react-icons/ti';
import { MdOutlineChecklistRtl as TaskIcon } from 'react-icons/md';
import CounterIcon from 'Assets/CounterIcon';
import { CodewarsIcon } from 'Assets/WidgetIcons';
import BobRossIcon from 'Assets/BobRossIcon';

// WIDGET CONTEXT INSTANCE
const WidgetContext = createContext({});

// WIDGET CONTEXT "HOOK"
export const useWidgetContext = () => useContext(WidgetContext);

export const WidgetContextProvider = ({ children }) => {
	// const { userData } = useAuthContext();

	const [widgets, setWidgets] = useState([
		{
			id: uuidv4(),
			name: 'Bob Ross',
			icon: <BobRossIcon />,
			widgetRef: 'bobross',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Clock',
			icon: <ClockIcon />,
			widgetRef: 'clock',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'CodeWars',
			icon: <CodewarsIcon />,
			widgetRef: 'codewars',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Counter',
			icon: <CounterIcon />,
			widgetRef: 'counter',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Weather',
			icon: <WeatherIcon />,
			widgetRef: 'weather',
			display: true,
		},
		{
			id: uuidv4(),
			name: 'Task Tracker',
			icon: <TaskIcon />,
			widgetRef: 'task',
			display: true,
		},
	]);

	const toggleDisplay = widgetRef => {
		// Create shallow copy. Define target widget index. Toggle widget display property. Set new widgets object.
		let updatedWidgets = [...widgets];
		let index = updatedWidgets.findIndex(widget => widget.widgetRef === widgetRef);
		updatedWidgets[index] = { ...updatedWidgets[index], display: !updatedWidgets[index].display };
		setWidgets(updatedWidgets);
	};

	const currentDisplay = widgetRef => {
		return widgets.filter(widget => widget.widgetRef === widgetRef)[0].display;
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
