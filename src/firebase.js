import { v4 as uuidv4 } from 'uuid';

// FIREBASE APP
import { initializeApp } from 'firebase/app';

// FIREBASE SERVICES
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// INITIALIZED FIREBASE APP
const app = initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// INITIALIZED FIREBASE SERVICES
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
