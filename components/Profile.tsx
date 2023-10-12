"use client";

import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from "react";
import { title, subtitle } from "./primitives";
import { AuthContext } from "@/context/auth";
import { Avatar, Button, Input, Spinner } from "@nextui-org/react";
import { EditIcon, MailIcon, UserIcon } from "./icons";
import { toast } from "sonner";
import { updateUserProfile } from "@/firebase/services/auth_services";

export default function Profile() {

  const { user } = useContext(AuthContext);

  const refName = useRef<HTMLInputElement | null>(null);
  const inputFile = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<File | null>(null);
  const [imageReader, setImageReader] = useState<string | null>(null);
  const [name, setName] = useState(user?.displayName);
  const [nameDisabled, setNameDisabled] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const editNameButton = () => {
    setNameDisabled(false);
    refName.current?.focus();
  }

  const editName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setSubmitDisabled(false);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name)

    // validate
    if (name.length < 3) {
      toast.error("El nombre debe tener al menos 3 caracteres");
    }

    toast.promise(updateUserProfile({ ...user, displayName: name }!, image), {
      loading: 'Cargando...',
      success: (data) => {
        setNameDisabled(true);
        setSubmitDisabled(true);
        return "Usuario actualizado correctamente";
      },
      error: (error) => {
        console.log(error);
        return "Algo salio mal, no se pudo actualizar el usuario";
      },
    });
  }

  useEffect(() => {
    setName(user?.displayName);
  }, [user?.displayName]);

  useEffect(() => {
    if (image !== null) {
      setSubmitDisabled(false);
    }
  }, [image]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = function (e: any) {
        setImageReader(e.target.result);
      }
      reader.readAsDataURL(image);
    }
  }, [image]);

  if (!user) {
    return (
      <section className="flex items-center justify-center gap-6 py-8 md:py-10">
        <Spinner
          size="lg"
          color="danger"
        />
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Perfil de&nbsp;</h1>
        <h1 className={title({ color: "pink", fontWeigth: "bold" })}>{user?.displayName}&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Todos los retos creados hasta ahora.
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full mt-10 rounded-2xl bg-white border dark:border-none shadow-sm dark:bg-zinc-900 overflow-hidden"
      >
        <section className="w-full p-4 flex justify-center">
          <div className="relative">
            <Avatar
              src={imageReader ? imageReader : user?.photoURL}
              name={user?.displayName}
              showFallback
              isBordered
              className="w-28 h-28 text-large"
            />
            <div className="shadow-lg flex justify-center items-center text-default-400 hover:text-danger-500 hover:cursor-pointer w-8 h-8 bg-default-100 rounded-full absolute bottom-0 right-0 z-10">
              <EditIcon
                width={18}
                height={18}
                onClick={() => inputFile.current?.click()}
              />
            </div>
          </div>

          <input
            ref={inputFile}
            type="file"
            onChange={(e) => setImage(e.target.files![0])}
            className="hidden"
          />
        </section>
        <section className="p-4 w-full">
          <h1 className="text-xl font-semibold text-center">Mi Perfil</h1>
        </section>
        <section className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="w-full relative">
            <EditIcon
              width={18}
              height={18}
              onClick={editNameButton}
              className="absolute top-3 right-3 z-50 text-default-400 hover:text-danger-500 hover:cursor-pointer"
            />
            <Input
              ref={refName}
              isDisabled={nameDisabled}
              type="text"
              placeholder="Ej: Edwin Hernández"
              name="name"
              value={name}
              onChange={editName}
              startContent={<UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
            />
          </div>
          <Input
            isDisabled
            type="email"
            name="email"
            placeholder="Ej: edwinhernandez.br@gmail.com"
            value={user?.email}
            startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          />
        </section>
        <section className="p-4 flex gap-4 w-full">
          <Button
            color="danger"
            variant="shadow"
            isDisabled={submitDisabled}
            size="lg"
            className="w-full"
            type="submit"
          >
            Guardar cambios
          </Button>
        </section>
      </form>
    </section>
  )
}
