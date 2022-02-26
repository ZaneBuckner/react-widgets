import { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from '../firebase'; // FIREBASE AUTH & CLOUD FIRESTORE INSTANCE
import { createUserDocument } from './FirebaseFirestore';

import { doc, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';

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
	const [loading, setLoading] = useState(true);

	// FIREBASE AUTHENTICATION METHODS
	const handleLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
	const handleLogout = () => signOut(auth);
	const handleRegister = async (email, password) => {
		const newUser = await createUserWithEmailAndPassword(auth, email, password);
		createUserDocument(newUser.user);
	};
	const handleEmailUpdate = newEmail => updateEmail(currentUser, newEmail);
	const handlePasswordReset = email => sendPasswordResetEmail(auth, email);
	const handlePasswordUpdate = newPassword => updatePassword(currentUser, newPassword);
	const handleUsernameUpdate = newName => updateProfile(currentUser, { displayName: newName });
	const handleAccountDelete = () => deleteUser(currentUser);

	// FIREBASE FIRESTORE METHODS
	const updateUserDocument = data => {
		const userDocumentRef = doc(db, `users/${currentUser.uid}`);
		updateDoc(userDocumentRef, data);
	};
	const deleteUserDocument = () => {
		const userDocumentRef = doc(db, `users/${currentUser.uid}`);
		deleteDoc(userDocumentRef);
	};

	// AUTH OBSERVER => WHEN USER STATE CHANGES (LOGIN & LOGOUT)
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user);
			setLoading(false);
		});
		return () => unsubscribe;
	}, []);

	// FIRESTORE DB OBSERVER => WHEN USER DATA CHANGES
	useEffect(() => {
		if (currentUser) {
			const userDocument = doc(db, `users/${currentUser.uid}`);
			const unsubscribe = onSnapshot(userDocument, doc => {
				setCurrentUserData(doc.data());
				console.log('CURRENT USER DATA', doc.data());
			});
			return unsubscribe;
		}
	}, [currentUser]);

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
				onDocumentUpdate: updateUserDocument,
				onDocumentDelete: deleteUserDocument,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};
