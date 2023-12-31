
import { DocumentData, collection, doc, getDocs, orderBy, query, setDoc, limit, onSnapshot, serverTimestamp, deleteDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config';
import { Dispatch, SetStateAction } from 'react';
import { IAnnounce } from '@/interfaces/announce';
import { v4 as uuidv4 } from 'uuid';

export async function createNewAnnounce(announce: IAnnounce): Promise<IAnnounce | undefined> {
  const { title, description, rules, reward } = announce;
  const id = uuidv4();
  try {
    await setDoc(
      doc(db, 'announces', id),
      {
        id,
        title,
        description,
        rules,
        reward,
        state: "active",
        view: [],
        timestampUpdated: serverTimestamp(),
        timestampCreated: serverTimestamp(),
      },
      { merge: true }
    );
    return announce;
  } catch (error) {
    throw error;
  }
}

export async function getAnnounces(): Promise<DocumentData[] | undefined> {
  const querySnapshot = await getDocs(collection(db, "announces"));
  const dataAnnounces: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    dataAnnounces.push(doc.data());
  });
  return dataAnnounces;
}

export async function viewAnnounce(id: string, userNameView: string, userIdView: string, userImageView: string) {
  const announceRef = doc(db, "announces", id);
  const newViewer = {
    userNameView,
    userIdView,
    userImageView,
  }
  await updateDoc(announceRef, {
    view: arrayUnion(newViewer)
  });
}

export async function deleteAnnounceById(id: string) {
  await deleteDoc(doc(db, "announces", id));
}
