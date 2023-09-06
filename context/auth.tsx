"use client";

import { Dispatch, SetStateAction, createContext, useState, useEffect } from 'react';

import { IUser } from "@/interfaces/user";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

interface ContextProps {
  isLogged: boolean;
  user: IUser | null;

  // methods
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as ContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogged(true);
        console.log(user)
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}