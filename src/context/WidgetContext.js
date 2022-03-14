import { useState, useEffect, createContext, useContext } from 'react';
import { useAuthContext } from './AuthContext';
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
	const { currentUser, userData, onDocumentUpdate } = useAuthContext();
	const [widgets, setWidgets] = useState(defaultWidgets);

	// UPDATE WIDGET DISPLAY STATE
	const toggleDisplay = widgetRef => {
		let updatedWidgets = [...widgets]; // SHALLOW COPY TO MUTATE
		let index = updatedWidgets.findIndex(widget => widget.widgetRef === widgetRef); // TARGET WIDGET'S INDEX
		updatedWidgets[index] = { ...updatedWidgets[index], display: !updatedWidgets[index].display }; // TOGGLE TARGET WIDGET'S DISPLAY VALUE
		currentUser ? onDocumentUpdate({ widgets: updatedWidgets }) : setWidgets(updatedWidgets); // UPDATE DOCUMENT || STATE
	};

	// READ WIDGET DISPLAY STATE
	const currentDisplay = widgetRef => {
		return widgets.filter(widget => widget.widgetRef === widgetRef)[0].display;
	};

	// SET AUTH USER WIDGETS => ON MOUNT & WHEN DATA UPDATES
	useEffect(() => userData && setWidgets(userData?.widgets || defaultWidgets), [userData]);

	// SET NON-AUTH USER WIDGETS AS DEFAULT => WHEN USER STATE CHANGES
	useEffect(() => !currentUser && setWidgets(defaultWidgets), [currentUser]);

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
