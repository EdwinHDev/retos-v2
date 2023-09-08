
import { DocumentData, collection, doc, getDocs, orderBy, query, setDoc, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../config';
import { IReto } from '@/interfaces/reto';
import { Dispatch, SetStateAction } from 'react';

export async function createNewReto(reto: IReto): Promise<IReto | undefined> {
  const { id, owner, photoURL, startDate, reto: retoData, company, status, endDate } = reto;
  try {
    await setDoc(
      doc(db, 'retos', id!),
      {
        id: id!,
        owner,
        photoURL,
        startDate,
        reto: retoData,
        company,
        status,
        endDate,
        timestampUpdated: serverTimestamp(),
        timestampCreated: serverTimestamp(),
      },
      { merge: true }
    );
    return reto;
  } catch (error) {
    throw error;
  }
}

export async function getRetos(): Promise<DocumentData[] | undefined> {
  const querySnapshot = await getDocs(collection(db, "retos"));
  const dataRetos: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    dataRetos.push(doc.data());
  });
  return dataRetos;
}

export async function getRetosWhithSnapshot(state: DocumentData[] | undefined, setState: Dispatch<SetStateAction<DocumentData[] | undefined>>, max = 3) {
  const q = query(collection(db, "retos"), limit(max));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const retos: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
        retos.push(doc.data());
    });
    // console.log("Current retos in CA: ", retos.join(", "));
    setState([...state!, retos]);
  });
}