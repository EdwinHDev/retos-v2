"use client"

import { AuthContext } from "@/context/auth";
import { db } from "@/firebase/config";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
import { toast } from "sonner";

export default function FormReto() {

  const router = useRouter();
  const { isLogged } = useContext(AuthContext);

  const [reto, setReto] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validar formulario
    if(reto === "") {
      toast.error("Debes de escribir un reto");
      return;
    }

    if(reto.length < 10) {
      toast.error("El reto debe tener al menos 10 caracteres");
      return;
    }

    // validar si esta conectado
    if(!isLogged) {
      toast.error("Debes iniciar sesión para crear un reto");
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
      return;
    }

    

    return

    // crear reto
    await setDoc(doc(db, "retos"), {
      owner: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 w-full"
    >
      <Input
        size="lg"
        variant="faded"
        type="text"
        placeholder="Crear mini proyecto antes de las 6:00 PM"
        value={reto}
        onValueChange={setReto}
        className="max-w-sm w-full"
      />
      <Button
        type="submit"
        size="lg"
        className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-800 shadow-lg shadow-pink-400/50 dark:shadow-pink-400/20 text-white font-medium"
      >
        Crear reto
      </Button>
    </form>
  )
}
