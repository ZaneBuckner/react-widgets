import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from 'context/AuthContext';
import { WidgetContextProvider } from 'context/WidgetContext';
import { useAuthContext } from 'context/AuthContext';

// import SignupModal from 'components/auth/SignupModal';
import HomePage from 'pages/HomePage';
import LoginModal from 'components/auth/LoginModal';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Widgets from './components/widgets/Widgets';
import Footer from 'components/footer/Footer';

// import { FaUserCircle as UserIcon } from 'react-icons/fa';
// import { RiLogoutCircleRLine as LogOutIcon } from 'react-icons/ri';

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
					{!loading && <Route path='/login' element={<LoginModal />} />}
					{/* <Route path='/signup' element={<RegisterModal />} /> */}
				</Routes>
				<Footer />
			</Router>
		</AuthContextProvider>
	);
}

export default App;
