import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from '../firebase'; // FIREBASE AUTH INSTANCE
import {
	signOut,
	updateEmail,
	updateProfile,
	updatePassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

// AUTH CONTEXT INSTANCE
const AuthContext = createContext({});

// AUTH CONTEXT "HOOK"
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		!loading && currentUser && console.log(currentUser);
	}, [currentUser, loading]);

	// FIREBASE AUTHENTICATION METHODS
	const handleLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
	const handleLogout = () => signOut(auth);
	const handleRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);
	const handleEmailUpdate = newEmail => updateEmail(currentUser, newEmail);
	const handlePasswordReset = email => sendPasswordResetEmail(auth, email);
	const handlePasswordUpdate = newPassword => updatePassword(currentUser, newPassword);
	const handleUsernameUpdate = newName => updateProfile(currentUser, { displayName: newName });

	// FIREBASE AUTH OBSERVER => WHEN USER STATE CHANGES (LOGIN & LOGOUT)
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
				currentUser,
				onLogin: handleLogin,
				onLogout: handleLogout,
				onRegister: handleRegister,
				onEmailUpdate: handleEmailUpdate,
				onPasswordReset: handlePasswordReset,
				onPasswordUpdate: handlePasswordUpdate,
				onUsernameUpdate: handleUsernameUpdate,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};
