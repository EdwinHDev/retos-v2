"use client";

import { createContext, useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { GetUserUID } from '@/firebase/services/auth_services';
import { DocumentData } from 'firebase/firestore';
import { currentDate } from '@/utils/dateUtils';
import { getRetos } from '@/firebase/services/retos_services';

interface ContextProps {
  isLogged: boolean;
  user: DocumentData | undefined;
}

export const AuthContext = createContext({} as ContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setIsLogged(true);
        GetUserUID(currentUser.uid)
          .then(user => {
            setUser(user);
          })
          .catch(error => console.log(error))
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}