"use client";

import { createContext, useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { GetUserUID, getTopRanking } from '@/firebase/services/auth_services';
import { DocumentData } from 'firebase/firestore';

interface ContextProps {
  isLogged: boolean;
  loading: boolean;
  user: DocumentData | undefined;
}

export const AuthContext = createContext({} as ContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {

  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setIsLogged(true);
        GetUserUID(currentUser.uid, setUser)
          .then(() => {
            setLoading(false);
          })
          .catch(error => console.log(error))
      } else {
        setIsLogged(false);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}