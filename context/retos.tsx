"use client";

import { createContext, useState, useEffect, Dispatch, SetStateAction, useContext } from 'react';

import { DocumentData, collection, doc, getDoc, limit, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { failedStateReto, getRetos } from '@/firebase/services/retos_services';
import { checkDate } from '@/utils/dateUtils';
import { AuthContext } from './auth';

interface ContextProps {
  loading: boolean;
  retos: DocumentData[];
  setRetos: Dispatch<SetStateAction<DocumentData[]>>;
}

export const RetosContext = createContext({} as ContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const RetosProvider = ({ children }: Props) => {

  const [loading, setLoading] = useState(true);
  const [retos, setRetos] = useState<DocumentData[]>([]);
  const [intervalState, setIntervalState] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    const q = query(collection(db, "retos"), limit(10), orderBy("timestampCreated", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const docs: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setLoading(false);
      setRetos(docs);
      // clearInterval(Number(intervalState));
    });
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     listenRetoFails();
  //     console.log("buscando...")
  //   }, 10000)
  
  //   setIntervalState(intervalId);
  //   return () => clearInterval(intervalId);
  // }, []);

  // No olvidarlo
  // async function listenRetoFails() {
  //   const allRetos = await getRetos();
  //   if (allRetos && allRetos.length > 0) {
  //     allRetos.map(async reto => {
  //       if (reto.status === "proceso" && checkDate(reto.endDate)) {
  //         try {
  //           await failedStateReto(reto.id);
  //           console.log(reto.status)
  //           const userRef = doc(db, "users", reto.ownerId);
  //           const docSnap = await getDoc(userRef);
  //           await updateDoc(userRef, {
  //             "retos.progress": Number(docSnap.data()!.retos.progress!) - 1,
  //             "retos.failed": Number(docSnap.data()!?.retos.failed!) + 1,
  //           });
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //     })
  //   }
  // }

  return (
    <RetosContext.Provider
      value={{
        retos,
        setRetos,
        loading
      }}
    >
      {children}
    </RetosContext.Provider>
  )
}