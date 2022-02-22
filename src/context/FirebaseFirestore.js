import { db } from '../firebase'; // FIREBASE FIRESTORE INSTANCE
import { v4 as uuidv4 } from 'uuid';

import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const userDocumentRef = currentUser => doc(db, `users/${currentUser.uid}`);

/**
 * Initializes user document with initial data on signup.
 * @param {object} currentUser Firebase User
 * @returns {object} Sets document to the user account.
 */
export const createUserDocument = async currentUser => {
	const userDocumentRef = doc(db, `users/${currentUser.uid}`);

	try {
		await setDoc(userDocumentRef, {
			uid: currentUser.uid,
			username: currentUser.email,
			location: '',
			codewarsUsername: '',
			tasks: [
				{
					date: 'mmm dd @ hh:mm',
					important: true,
					id: uuidv4(),
					title: 'Task Name',
				},
			],
			widgets: [
				{
					id: uuidv4(),
					display: true,
					title: 'Clock',
					widgetRef: 'clock',
				},
				{
					id: uuidv4(),
					display: true,
					title: 'Bob Ross',
					widgetRef: 'bobross',
				},
				{
					id: uuidv4(),
					display: true,
					title: 'Weather',
					widgetRef: 'weather',
				},
				{
					id: uuidv4(),
					display: true,
					title: 'Task Tracker',
					widgetRef: 'tasktracker',
				},
				{
					id: uuidv4(),
					display: true,
					title: 'CodeWars',
					widgetRef: 'codewars',
				},
				{
					id: uuidv4(),
					display: true,
					title: 'Counter',
					widgetRef: 'counter',
				},
			],
		});
	} catch (error) {
		console.log('Error setting signed up user data', error);
	}
};

/**
 * Updates user document with provided data object.
 * @param {object} currentUser Firebase User
 * @param {object} data Data to update.
 * @example
 * const currentUserData = { location: '' };
 * const newLocation = {location: { zip: 70401, state: 'LA', city: 'Hammond', }};
 * updateUserDocument(currentUser, newLocation);
 * currentUserData => { location: { zip: 70401, state: 'LA', city: 'Hammond' } }
 */
export const updateUserDocument = async (currentUser, data) => {
	const userDocumentRef = doc(db, `users/${currentUser.uid}`);
	await updateDoc(userDocumentRef, data);
};

/**
 * Deletes a users document from Firebase Cloud Firestore.
 * @param {object} currentUser Firebase User
 */
export const deleteUserDocument = async currentUser => {
	const userDocumentRef = doc(db, `users/${currentUser.uid}`);
	await deleteDoc(userDocumentRef);
};
