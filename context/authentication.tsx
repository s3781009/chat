import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithPopup, signOut } from 'firebase/auth';
import app from '../pages/_firebase';

export const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

export const signInAnonymous = () => signInAnonymously(auth);

export const logOut = () => signOut(auth);
