"use client"

import { useState, FormEvent, ChangeEvent } from 'react';

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { createUserWithEmail } from '@/firebase/services/auth_services';
import { useRouter } from 'next/navigation';
import { IUser } from '@/interfaces/user';
import { toast } from 'sonner';
import { validateEmail } from '@/utils/validateEmail';

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

    const { displayName, email, password } = userData;

    if ([displayName, email, password].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if(displayName.length < 3) {
      toast.error("El nombre completo debe tener al menos 3 caracteres");
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

    toast.promise(createUserWithEmail(displayName, email, password), {
      loading: 'Cargando...',
      success: (data) => {
        console.log(data);
        setLoading(false);
        router.push("/");
        return `El usuario ${displayName} fue creado`;
      },
      error: (error) => {
        console.log(error);
        setLoading(false);
        if(error.code === "auth/email-already-in-use") {
          return "Ya existe un usuario con ese email";
        } else {
          return "No se pudo registrar el usuario";
        }
      },
    });

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-6"
      noValidate
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
