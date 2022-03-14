import { db } from '../firebase'; // FIREBASE FIRESTORE INSTANCE
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export const getInitialData = currentUser => {
	return {
		uid: currentUser.uid,
		username: currentUser.email,
		location: '',
		codewarsUsername: '',
		tasks: [
			{
				date: 'mmm dd | hh:mm',
				important: true,
				id: uuidv4(),
				title: 'Task Name',
			},
		],
		widgets: [
			{
				id: uuidv4(),
				title: 'Weather',
				widgetRef: 'weather',
				display: true,
			},
			{
				id: uuidv4(),
				title: 'Clock',
				widgetRef: 'clock',
				display: true,
			},
			{
				id: uuidv4(),
				title: 'Bob Ross',
				widgetRef: 'bobross',
				display: true,
			},
			{
				id: uuidv4(),
				title: 'Task Tracker',
				widgetRef: 'tasktracker',
				display: true,
			},
			{
				id: uuidv4(),
				title: 'Counter',
				widgetRef: 'counter',
				display: true,
			},
			{
				id: uuidv4(),
				title: 'Codewars',
				widgetRef: 'codewars',
				display: true,
			},
		],
	};
};

/**
 * Initializes user document with initial data on signup.
 * @param {object} currentUser Firebase User
 * @returns {object} Sets document to the user account.
 */
export const createUserDocument = async currentUser => {
	const userDocumentRef = doc(db, `users/${currentUser.uid}`);

	try {
		const initialData = getInitialData(currentUser);
		await setDoc(userDocumentRef, initialData);
	} catch (error) {
		console.log('Error setting signed up user data', error);
	}
};
