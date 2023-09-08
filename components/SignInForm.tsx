"use client"

import { useState, FormEvent, ChangeEvent } from 'react';

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/react";
import { GithubIcon, GoogleIcon } from "./icons";
import { SignInUserWithEmail, SignInWithGithub, SignInWithGoogle } from '@/firebase/services/auth_services';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { validateEmail } from '@/utils/validateEmail';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = userData;

    if ([email, password].includes("")) {
      toast.error("El email y la contraseña son obligatorios");
      return;
    }

    if(!validateEmail(email)) {
      toast.error("El email no es válido");
      return;
    }

    if(password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      await SignInUserWithEmail(email, password);
      setLoading(false);
      router.push("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("El email o la contraseña es invalido");
    }
  }

  const loginWithGoogle = async () => {

    // Validar si ya existe ese email
    

    try {
      await SignInWithGoogle();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo salio mal, no se pudo iniciar sesión");
    }
  }

  const loginWithGithub = async () => {
    try {
      await SignInWithGithub();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo salio mal, no se pudo iniciar sesión");
    }
  }

  return (
    <>
      <section className="w-full flex flex-col items-center gap-2">
        <Button
          size="lg"
          endContent={<GoogleIcon />}
          className="max-w-sm w-full bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800"
          onClick={loginWithGoogle}
        >
          Iniciar con Google
        </Button>
        <Button
          size="lg"
          endContent={<GithubIcon />}
          className="max-w-sm w-full bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800"
          onClick={loginWithGithub}
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
        noValidate
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
