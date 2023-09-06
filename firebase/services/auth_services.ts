
import { createUserWithEmailAndPassword, User, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../config';

export async function createUserWithEmail(displayName: string, email: string, password: string): Promise<User | undefined> {
  try {
    email.trim().toLowerCase();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      await setDoc(
        doc(db, 'users', res.user.uid),
        {
          displayName: displayName,
          email: res.user.email,
          photoURL: "",
          emailVerified: false,
          timestampUpdated: serverTimestamp(),
          timestampCreated: serverTimestamp(),
        },
        { merge: true }
      );
      return res.user;
    }
  } catch (error) {
    throw error;
  }
}

export async function SignInUserWithEmail(email: string, password: string): Promise<User | undefined> {
  try {
    email.trim().toLowerCase();
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res.user)
    return res.user
  } catch (error) {
    throw error;
  }
}
export async function signOut(): Promise<void> {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
}
