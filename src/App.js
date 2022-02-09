import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import { AuthContextProvider } from 'context/AuthContext';
import { WidgetContextProvider } from 'context/WidgetContext';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import PasswordResetPage from 'pages/PasswordResetPage';
import UpdateProfilePage from 'pages/UpdateProfilePage';
import RegisterPage from 'pages/RegisterPage';
import ProfilePage from 'pages/ProfilePage';
import PageNotFound from 'pages/PageNotFound';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Widgets from './components/widgets/Widgets';
import Footer from 'components/footer/Footer';

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route path='*' element={<PageNotFound />} />
					<Route exact path='/' element={<HomePage />} />
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/>
					<Route
						path='/profile-update'
						element={
							<PrivateRoute>
								<UpdateProfilePage />
							</PrivateRoute>
						}
					/>
					<Route
						path='/widgets'
						element={
							<WidgetContextProvider>
								<Toolbar />
								<Widgets />
							</WidgetContextProvider>
						}
					/>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/password-reset' element={<PasswordResetPage />} />
				</Routes>
				<Footer />
			</Router>
		</AuthContextProvider>
	);
}

export default App;
