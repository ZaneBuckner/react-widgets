import { useState, useEffect, useRef, useContext, createContext } from 'react';
import { auth, db } from '../firebase'; // FIREBASE AUTH & CLOUD FIRESTORE INSTANCE
import { getInitialData, createUserDocument } from './FirebaseFirestore';

import { doc, onSnapshot, updateDoc, deleteDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

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
	const userDocRef = useRef(null);
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
	const updateUserDocument = data => updateDoc(userDocRef.current, data);
	const deleteUserDocument = () => deleteDoc(userDocRef.current);
	const resetUserDocument = () => {
		const initialData = getInitialData(currentUser);
		updateDoc(userDocRef.current, initialData);
	};

	// TASK-TRACKER WIDGET METHODS
	const addUserTask = task => updateDoc(userDocRef.current, { tasks: arrayUnion(task) });
	const deleteUserTask = task => updateDoc(userDocRef.current, { tasks: arrayRemove(task) });
	const updateUserTask = updatedTasks => updateDoc(userDocRef.current, { tasks: updatedTasks });

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
		if (!currentUser) return;
		const documentRef = doc(db, `users/${currentUser.uid}`);
		const unsubscribe = onSnapshot(documentRef, doc => {
			setCurrentUserData(doc.data());
			userDocRef.current = documentRef;
			// console.log('CURRENT USER DATA', doc.data());
		});
		return () => unsubscribe;
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
				onDocumentReset: resetUserDocument,

				onUserTaskAdd: addUserTask,
				onUserTaskDelete: deleteUserTask,
				onUserTaskUpdate: updateUserTask,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};
