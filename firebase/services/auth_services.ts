
import { createUserWithEmailAndPassword, User, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, UserCredential, getAdditionalUserInfo, updateProfile } from 'firebase/auth';
import { DocumentData, collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../config';
import { Dispatch, SetStateAction } from 'react';
import { orderRanking } from '@/utils/orderRanking';

export async function createUserWithEmail(displayName: string, email: string, password: string): Promise<User | undefined> {
  try {
    email.trim().toLowerCase();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      await setDoc(
        doc(db, 'users', res.user.uid),
        {
          id: res.user.uid,
          displayName: displayName,
          email: res.user.email,
          photoURL: "",
          retos: {
            completed: 0,
            failed: 0,
            progress: 0
          },
          role: "client",
          score: 0
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
    const checkUser = await getDoc(doc(db, "users", res.user.uid));
    if (res && !checkUser.data()) {
      await setDoc(
        doc(db, 'users', res.user.uid),
        {
          id: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          retos: {
            completed: 0,
            failed: 0,
            progress: 0
          },
          role: "client",
          score: 0
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
    const checkUser = await getDoc(doc(db, "users", res.user.uid));
    if (res && !checkUser.data()) {
      await setDoc(
        doc(db, 'users', res.user.uid),
        {
          id: res.user.uid,
          displayName: username,
          email: res.user.email,
          photoURL: res.user.photoURL,
          retos: {
            completed: 0,
            failed: 0,
            progress: 0
          },
          role: "client",
          score: 0
        },
        { merge: true }
      );
      return res.user;
    }
  } catch (error) {
    throw error;
  }
}

export async function GetUserUID(uid: string, setUser: Dispatch<SetStateAction<DocumentData | undefined>>) {
  try {
    const unsub = onSnapshot(doc(db, "users", uid), (doc) => {
      // console.log("Current data: ", doc.data());
      setUser(doc.data());
    });
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

export async function updateUserProfile(displayName: string, photoURL: string) {
  updateProfile(auth.currentUser!, {
    displayName: displayName,
    photoURL: photoURL
  }).then(() => {
    const userRef = doc(db, "users", auth.currentUser?.uid!);
    updateDoc(userRef, {
      displayName,
      photoURL
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });

    const q = query(collection(db, "retos"), where("ownerId", "==", auth.currentUser?.uid!));
    getDocs(q)
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          updateDoc(doc.ref, {
            owner: displayName
          }).then(() => {
            // ...
          }).catch(error => {
            console.log(error);
          })
        });
      })
      .catch(error => {
        console.log(error);
      })

  }).catch((error) => {
    console.log(error)
  });
}

export async function getTopRanking(setState: Dispatch<SetStateAction<DocumentData[] | undefined>>, max = 3) {
  const q = query(collection(db, "users"), orderBy("score", "desc"), where("score", ">" , 0), limit(max));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const top: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      top.push(doc.data());
    });
    const orderList = orderRanking(top);
    setState(orderList);
  });
}

type retos = {
  completed: number,
  failed: number,
  progress: number
}

export async function updateRetos(uid: string, retos: retos, score: number) {
  const { completed, failed, progress } = retos;
  const retosRef = doc(db, "users", uid);
  try {
    await updateDoc(retosRef, {
      retos: {
        completed,
        failed,
        progress
      },
      score
    });
  } catch (error) {
    console.log(error);
  }
}