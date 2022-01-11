import { WidgetContextProvider } from 'context/WidgetContext';

import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Widgets from './components/widgets/Widgets';

function App() {
	return (
		<>
			<Header />
			<WidgetContextProvider>
				<Toolbar />
				<Widgets />
			</WidgetContextProvider>
		</>
	);
}

export default App;
