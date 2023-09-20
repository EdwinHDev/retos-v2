"use client";

import { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

import { DocumentData, collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '@/firebase/config';

interface ContextProps {
  loading: boolean;
  announces: DocumentData[];
  setAnnounces: Dispatch<SetStateAction<DocumentData[]>>;
}

export const AnnouncesContext = createContext({} as ContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AnnouncesProvider = ({ children }: Props) => {

  const [loading, setLoading] = useState(true);
  const [announces, setAnnounces] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collection(db, "announces"), orderBy("timestampCreated", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const docs: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setLoading(false);
      setAnnounces(docs);
    });
  }, []);

  return (
    <AnnouncesContext.Provider
      value={{
        announces,
        setAnnounces,
        loading
      }}
    >
      {children}
    </AnnouncesContext.Provider>
  )
}