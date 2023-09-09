"use client";

import { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

import { DocumentData, collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { failedStateReto } from '@/firebase/services/retos_services';
import { checkDate } from '@/utils/dateUtils';

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
        docs.push(doc.data());
      });
      setLoading(false);
      setRetos(docs);
    });
  }, []);

  // No olvidarlo
  async function listenRetoFails() {

    if (retos && retos.length > 0) {
      retos.map(async reto => {
        if (reto.status === "proceso" && checkDate(reto.endDate)) {
          try {
            await failedStateReto(reto.id);
          } catch (error) {
            console.log(error);
          }
        }
      })
    }
  }

  listenRetoFails();

  setInterval(() => {
    listenRetoFails();
  }, 10000);

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