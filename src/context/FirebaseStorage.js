// FIREBASE CLOUD STORAGE INSTANCE
import { storage } from '../firebase';

// FIREBASE SERVICES
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

/** STORES IMAGE IN FIREBASE CLOUD STORAGE & UPDATES USER PROFILE
 * @param {object} currentUser - Firebase User
 * @param {object} file - User selected image file
 * @param {boolean} setLoading - UpdateProfilePage loading state
 * @param {string} setError - UpdateProfilePage error state
 */
export async function storeUserImage(currentUser, file, setLoading, setError) {
	const userStorageRef = ref(storage, `${currentUser.uid}`);

	try {
		setLoading(true);
		await uploadBytes(userStorageRef, file);
		const photoURL = await getDownloadURL(userStorageRef);
		updateProfile(currentUser, { photoURL });
	} catch (err) {
		setError(err);
	} finally {
		setLoading(false);
	}
}
