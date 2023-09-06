"use client"

import { useState, FormEvent, useEffect, ChangeEvent } from 'react';

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/react";
import { GithubIcon, GoogleIcon } from "./icons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { IUser } from '@/interfaces/user';
import { SignInUserWithEmail } from '@/firebase/services/auth_services';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface IUserLogin {
  email: string;
  password: string;
}

const INITIAL_USER_DATA: IUserLogin = {
  email: "",
  password: "",
}

export default function SignInForm() {

  const router = useRouter();

  const [userData, setUserData] = useState<IUserLogin>(INITIAL_USER_DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user)
      } else {
        console.log("El usuario está desconectado")
      }
    });
    // console.log(auth.currentUser)
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { email, password } = userData;

    if ([email, password].includes("")) {
      console.log("campos obligatorios");
      return;
    }

    try {
      const user = await SignInUserWithEmail(email, password);
      console.log(user);
      setLoading(false);
      router.push("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("El email o la contraseña es invalido");
    }
  }

  return (
    <>
      <section className="w-full flex flex-col items-center gap-2">
        <Button
          size="lg"
          endContent={<GoogleIcon />}
          className="max-w-sm w-full bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800"
        >
          Iniciar con Google
        </Button>
        <Button
          size="lg"
          endContent={<GithubIcon />}
          className="max-w-sm w-full bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800"
        >
          Iniciar con GitHub
        </Button>
      </section>
      <section className="max-w-sm w-full relative">
        <p
          className="absolute -top-6 left-2/4 -translate-x-2/4 p-2 bg-white dark:bg-black text-lg text-zinc-400 dark:text-zinc-600"
        >o</p>
        <Divider />
      </section>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-6"
      >
        <Input
          size="md"
          variant="faded"
          type="email"
          label="Email"
          name='email'
          value={userData.email}
          onChange={handleChange}
          className="max-w-sm w-full"
        />
        <Input
          size="md"
          variant="faded"
          type="password"
          label="Contraseña"
          name='password'
          value={userData.password}
          onChange={handleChange}
          className="max-w-sm w-full"
        />
        {
          loading ? (
            <Button
              isLoading
              size='lg'
              color='default'
              variant='shadow'
              className="font-medium uppercase"
            >
              Cargando...
            </Button>
          ) : (
            <Button
              size="lg"
              color="danger"
              variant="shadow"
              className="font-medium uppercase"
              type="submit"
            >
              Entrar
            </Button>
          )
        }

      </form>
    </>
  )
}
