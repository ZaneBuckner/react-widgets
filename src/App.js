import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from 'context/AuthContext';
import { WidgetContextProvider } from 'context/WidgetContext';
import { useAuthContext } from 'context/AuthContext';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Widgets from './components/widgets/Widgets';
import Footer from 'components/footer/Footer';

function App() {
	const { loading } = useAuthContext();

	return (
		<AuthContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route
						path='/widgets-dashboard'
						element={
							<WidgetContextProvider>
								<Toolbar />
								<Widgets />
							</WidgetContextProvider>
						}
					/>
					{!loading && <Route path='/login' element={<LoginPage />} />}
					{!loading && <Route path='/register' element={<RegisterPage />} />}
				</Routes>
				<Footer />
			</Router>
		</AuthContextProvider>
	);
}

export default App;
