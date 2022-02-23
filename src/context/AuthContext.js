import { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from '../firebase'; // FIREBASE AUTH & CLOUD FIRESTORE INSTANCE
import { createUserDocument, updateUserDocument } from './FirebaseFirestore';
import { fetchUserLocation } from 'utils/util';
import { doc, onSnapshot } from 'firebase/firestore';
import {
	signOut,
	deleteUser,
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
	const [currentUserData, setCurrentUserData] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	const [loading, setLoading] = useState(true);

	// FIREBASE AUTHENTICATION METHODS
	const handleLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
	const handleLogout = () => signOut(auth);
	const handleRegister = async (email, password) => {
		const newUser = await createUserWithEmailAndPassword(auth, email, password);
		createUserDocument(newUser.user);
		fetchUserLocation(setUserLocation);
	};
	const handleEmailUpdate = newEmail => updateEmail(currentUser, newEmail);
	const handlePasswordReset = email => sendPasswordResetEmail(auth, email);
	const handlePasswordUpdate = newPassword => updatePassword(currentUser, newPassword);
	const handleUsernameUpdate = newName => updateProfile(currentUser, { displayName: newName });
	const handleAccountDelete = () => deleteUser(currentUser);

	// AUTH OBSERVER => WHEN USER STATE CHANGES (LOGIN & LOGOUT)
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	// FIRESTORE DB OBSERVER => WHEN USER DATA CHANGES
	useEffect(() => {
		if (currentUser) {
			const userDocumentRef = doc(db, `users/${currentUser.uid}`);
			const unsubscribe = onSnapshot(userDocumentRef, doc => setCurrentUserData(doc.data()));
			return unsubscribe;
		}
	}, [currentUser]);

	// NEW USER LOCATION LISTENER => AWAITS FETCHED DATA
	useEffect(() => {
		userLocation && updateUserDocument(currentUser, { location: userLocation });
	}, [userLocation, currentUser]);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				userData: currentUserData,
				onLogin: handleLogin,
				onLogout: handleLogout,
				onRegister: handleRegister,
				onEmailUpdate: handleEmailUpdate,
				onPasswordReset: handlePasswordReset,
				onPasswordUpdate: handlePasswordUpdate,
				onUsernameUpdate: handleUsernameUpdate,
				onAccountDelete: handleAccountDelete,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};
