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
	const [loading, setLoading] = useState();
	const [error, setError] = useState('');
	const [isUser, setIsUser] = useState(null);

	// SIGN UP NEW USER
	const userSignUp = async (email, password) => {
		setLoading(true);
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.log(err.message);
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	// LOG USER IN
	const userLogIn = async (email, password) => {
		setLoading(true);
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			// setCurrentUser(res.user);
			setIsUser(true);
		} catch (err) {
			console.log(err.message);
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	// LOG USER OUT
	const userLogOut = () => {
		signOut(auth);
		setIsUser(false);
	};

	// USER FORGOT PASSWORD
	const userForgotPassword = email => {
		return sendPasswordResetEmail(auth, email);
	};

	// WHEN A USER SIGNS IN OR LOGS OUT
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setCurrentUser(user);
				console.log(user);
			} else {
				setCurrentUser(null);
			}
			setError('');
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isUser,
				currentUser,
				error,
				loading,
				userForgotPassword,
				onSignUp: userSignUp,
				onLogIn: userLogIn,
				onLogOut: userLogOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
