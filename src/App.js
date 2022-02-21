import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthRequired, AuthRestricted } from 'components/shared/PrivateRoute';
import { AuthContextProvider } from 'context/AuthContext';
import { WidgetContextProvider } from 'context/WidgetContext';

import Header from 'components/header/Header';
import Toolbar from 'components/toolbar/Toolbar';
import Widgets from 'components/widgets/Widgets';
import Footer from 'components/footer/Footer';
import PageNotFound from 'pages/PageNotFound';

// USER AUTH REQUIRED
import ProfilePage from 'pages/ProfilePage';
import UpdateProfilePage from 'pages/UpdateProfilePage';

// USER AUTH RESTRICTED
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import PasswordResetPage from 'pages/PasswordResetPage';

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/widgets'
						element={
							<WidgetContextProvider>
								<Toolbar />
								<Widgets />
							</WidgetContextProvider>
						}
					/>
					<Route path='*' element={<PageNotFound />} />

					{/* USER AUTH REQUIRED */}
					<Route path='/profile' element={<AuthRequired children={<ProfilePage />} />} />
					<Route
						path='/profile-update'
						element={<AuthRequired children={<UpdateProfilePage />} />}
					/>

					{/* USER AUTH RESTRICTED */}
					<Route exact path='/' element={<AuthRestricted children={<HomePage />} />} />
					<Route path='/login' element={<AuthRestricted children={<LoginPage />} />} />
					<Route path='/register' element={<AuthRestricted children={<RegisterPage />} />} />
					<Route
						path='/password-reset'
						element={<AuthRestricted children={<PasswordResetPage />} />}
					/>
				</Routes>
				<Footer />
			</Router>
		</AuthContextProvider>
	);
}

export default App;
