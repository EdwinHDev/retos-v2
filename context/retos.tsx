"use client";

import { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

import { DocumentData, collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { getRetos, getRetosWhithSnapshot } from '@/firebase/services/retos_services';
import { db } from '@/firebase/config';

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

  useEffect(() => {
    const q = query(collection(db, "retos"), limit(5), orderBy("timestampCreated", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const docs: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        // arrRetos.push(doc.data());
        docs.push(doc.data());
      });
      // setRetos([...retos!, arrRetos]);
      setLoading(false);
      setRetos(docs);
    });
  }, []);

  // useEffect(() => {
  //   const getRetosData = async () => {
  //     try {
  //       const res = await getRetos();
  //       setRetos(res);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   }

  //   getRetosData();
  // }, []);

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