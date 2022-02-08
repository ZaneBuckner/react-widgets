import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

import HomePage from 'pages/HomePage';

// ROUTE WRAPPER THAT REDIRECTS USERS TO THE 'WELCOME PAGE' IF NO SIGNED IN USER
function PrivateRoute({ children }) {
	const { currentUser } = useAuthContext();

	return currentUser ? children : <Navigate to='/' element={<HomePage />} />;
}

export default PrivateRoute;
