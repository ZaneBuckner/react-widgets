import { useState, useEffect, useContext, createContext } from 'react';
import {
	createUserWithEmailAndPassword,
	// updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from '../firebase';

// CREATE AUTH CONTEXT
const AuthContext = createContext({});

// RETURNS AUTH CONTEXT DATA
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => !loading && currentUser && console.log(currentUser), [currentUser, loading]);

	// LOG IN
	const handleLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// LOG OUT
	const handleLogout = () => signOut(auth);

	// NEW ACCOUNT
	const handleRegister = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// USER FORGOT PASSWORD
	const handlePasswordReset = email => {
		return sendPasswordResetEmail(auth, email);
	};

	// WHEN A USER SIGNS IN OR LOGS OUT
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				error,
				loading,
				currentUser,
				onLogin: handleLogin,
				onLogout: handleLogout,
				onRegister: handleRegister,
				onPasswordReset: handlePasswordReset,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};
