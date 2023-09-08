"use client"

import { AuthContext } from "@/context/auth";
import { currentDate, formatDate, formatTime } from "@/utils/dateUtils";
import { Input } from "@nextui-org/input";
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { subtitle } from "./primitives";
import { createNewReto } from "@/firebase/services/retos_services";
import { RetosContext } from "@/context/retos";

import { v4 as uuidv4 } from 'uuid';

export default function FormReto() {

  const router = useRouter();
  const { isLogged, user } = useContext(AuthContext);
  const { retos, setRetos } = useContext(RetosContext);

  const [loading, setLoading] = useState(false);
  const [reto, setReto] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const validate = () => {
    if (reto === "") {
      toast.error("Debes de escribir un reto");
      return;
    }

    if (reto.length < 10) {
      toast.error("El reto debe tener al menos 10 caracteres");
      return;
    }

    // validar si esta conectado
    if (!isLogged) {
      toast.error("Debes iniciar sesión para crear un reto");
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
      return;
    }

    onOpen();
  }

  // crear reto
  const handleSubmit = async () => {

    if (date === "") {
      toast.error("Debes elegir la fecha en que finalizara el reto");
      return;
    }


    if (time === "") {
      toast.error("Debes elegir la hora en que finalizara el reto");
      return;
    }

    setLoading(true);

    toast.promise(createNewReto({
      id: uuidv4(),
      owner: user?.displayName,
      photoURL: user?.photoURL,
      startDate: currentDate(),
      reto: reto,
      company: "Tu Lojita",
      status: "proceso",
      endDate: formatDate(date) + ", " + formatTime(time)
    }), {
      loading: 'Cargando...',
      success: (data) => {
        setLoading(false);
        setReto("");
        setDate("");
        setTime("");
        setRetos([...retos!, data as DocumentData]);
        return "Reto creado correctamente";
      },
      error: (error) => {
        console.log(error);
        setLoading(false);
        console.log(error.code)
        // if(error.code === "auth/email-already-in-use") {
        //   return "Ya existe un usuario con ese email";
        // } else {
        //   return "No se pudo registrar el usuario";
        // }
        return "No se pudo crear el reto";
      },
    })
    onClose();
  }

  return (
    <form
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
        onPress={validate}
        size="lg"
        color="danger"
        className="font-medium"
      >
        Crear reto
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">Elije una hora</ModalHeader>
              <ModalBody>
                <h2 className={subtitle()}>Elije la fecha y hora en la que quieres que finalice tu reto.</h2>
                <Input
                  size="lg"
                  variant="faded"
                  type="date"
                  value={date}
                  onValueChange={setDate}
                  className="max-w-sm w-full"
                />
                <Input
                  size="lg"
                  variant="faded"
                  type="time"
                  value={time}
                  onValueChange={setTime}
                  className="max-w-sm w-full"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  size="lg"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
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
                      className="font-medium"
                      onPress={handleSubmit}
                    >
                      Crear
                    </Button>
                  )
                }

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  )
}
