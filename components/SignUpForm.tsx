"use client"

import { useState, FormEvent, ChangeEvent } from 'react';

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { auth } from "@/firebase/config";
import { createUserWithEmail } from '@/firebase/services/auth_services';
import { useRouter } from 'next/navigation';
import { IUser } from '@/interfaces/user';
import { toast } from 'sonner';

const INITIAL_USER_DATA: IUser = {
  displayName: "",
  email: "",
  password: "",
}

export default function SignUpForm() {

  const router = useRouter();
  const [userData, setUserData] = useState<IUser>(INITIAL_USER_DATA);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { displayName, email, password } = userData;

    if ([displayName, email, password].includes("")) {
      console.log("campos obligatorios");
      return;
    }

    toast.promise(createUserWithEmail(displayName, email, password), {
      loading: 'Cargando...',
      success: (data) => {
        console.log(data);
        setLoading(false);
        router.push("/");
        return `El usuario ${data?.email} fue creado`;
      },
      error: (error) => {
        console.log(error);
        setLoading(false);
        return "No se pudo registrar el usuario";
      },
    });

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-6"
    >
      <Input
        size="md"
        variant="faded"
        type="text"
        label="Nombre completo"
        name='displayName'
        value={userData.displayName}
        onChange={handleChange}
        className="max-w-sm w-full"
      />
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
        Crear cuenta
      </Button>
        )
      }
    </form>
  )
}
