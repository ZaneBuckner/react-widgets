// FIREBASE CLOUD STORAGE INSTANCE
import { storage } from '../firebase';

// FIREBASE SERVICES
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

/**
 * Stores image in Firebase Cloud Storage & updates user profile.
 * @param {object} currentUser Currently signed in user.
 * @param {object} file User selected image file.
 * @param {boolean} setLoading UpdateProfilePage component loading state.
 * @param {string} setError UpdateProfilePage component error state.
 */
export async function storeUserImage(currentUser, file, setLoading, setError, setSuccess) {
	const userStorageRef = ref(storage, `${currentUser.uid}`);

	try {
		setLoading(true);
		await uploadBytes(userStorageRef, file);
		const photoURL = await getDownloadURL(userStorageRef);
		updateProfile(currentUser, { photoURL });
		setSuccess('Profile image updated.');
	} catch (err) {
		setError(err);
	} finally {
		setLoading(false);
	}
}
