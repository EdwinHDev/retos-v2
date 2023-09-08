
import { createUserWithEmailAndPassword, User, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, UserCredential, getAdditionalUserInfo } from 'firebase/auth';
import { DocumentData, doc, getDoc, setDoc } from 'firebase/firestore';
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

export async function SignInWithGoogle(): Promise<User | undefined> {
  try {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    if (res) {
      await setDoc(
        doc(db, 'users', res.user.uid),
        {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        },
        { merge: true }
      );
      return res.user;
    }
  } catch (error) {
    throw error;
  }
}

export async function SignInWithGithub(): Promise<User | undefined> {
  try {
    const provider = new GithubAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const username = getAdditionalUserInfo(res)?.username;
    if (res) {
      await setDoc(
        doc(db, 'users', res.user.uid),
        {
          displayName: username,
          email: res.user.email,
          photoURL: res.user.photoURL,
        },
        { merge: true }
      );
      return res.user;
    }
  } catch (error) {
    throw error;
  }
}

export async function GetUserUID(uid: string): Promise<DocumentData | undefined> {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
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
