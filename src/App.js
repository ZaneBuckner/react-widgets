import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WidgetContextProvider } from 'context/WidgetContext';

import Home from 'components/home/Home';
import AuthModal from 'components/shared/AuthModal';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Widgets from './components/widgets/Widgets';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route
					path='/widgets-dashboard'
					element={
						<WidgetContextProvider>
							<Toolbar />
							<Widgets />
						</WidgetContextProvider>
					}
				/>
				<Route path='/signup' element={<AuthModal />} />
			</Routes>
		</Router>
	);
}

export default App;
