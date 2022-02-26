import { db } from '../firebase'; // FIREBASE FIRESTORE INSTANCE
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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
