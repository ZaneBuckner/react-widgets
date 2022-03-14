import { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const WidgetContext = createContext({}); // WIDGET CONTEXT INSTANCE
export const useWidgetContext = () => useContext(WidgetContext); // WIDGET CONTEXT "HOOK"

const defaultWidgets = [
	{
		id: uuidv4(),
		title: 'Weather',
		widgetRef: 'weather',
		display: true,
	},
	{
		id: uuidv4(),
		title: 'Clock',
		widgetRef: 'clock',
		display: true,
	},
	{
		id: uuidv4(),
		title: 'Bob Ross',
		widgetRef: 'bobross',
		display: true,
	},
	{
		id: uuidv4(),
		title: 'Task Tracker',
		widgetRef: 'tasktracker',
		display: true,
	},
	{
		id: uuidv4(),
		title: 'Counter',
		widgetRef: 'counter',
		display: true,
	},
	{
		id: uuidv4(),
		title: 'Codewars',
		widgetRef: 'codewars',
		display: true,
	},
];

export const WidgetContextProvider = ({ children }) => {
	const [widgets, setWidgets] = useState(defaultWidgets);

	const toggleDisplay = widgetRef => {
		// Create shallow copy. Define target widget index. Toggle widget display property. Set new widgets object.
		let updatedWidgets = [...widgets];
		let index = updatedWidgets.findIndex(widget => widget.widgetRef === widgetRef);
		updatedWidgets[index] = { ...updatedWidgets[index], display: !updatedWidgets[index].display };
		setWidgets(updatedWidgets);
	};

	// RETURNS CURRENT WIDGET DISPLAY VALUE
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
