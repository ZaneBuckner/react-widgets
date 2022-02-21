import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';

// ROUTES ONLY ACCESSIBLE BY AUTHENTICATED USERS
export function AuthRequired({ children }) {
	const { currentUser } = useAuthContext();

	return currentUser ? children : <Navigate to='/' element={<HomePage />} />;
}

// ROUTES BLOCKED BY AUTHENTICATED USERS
export function AuthRestricted({ children }) {
	const { currentUser } = useAuthContext();

	return currentUser ? <Navigate to='/profile' element={<ProfilePage />} /> : children;
}
