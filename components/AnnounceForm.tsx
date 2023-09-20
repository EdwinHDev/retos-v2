"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AddIcon, MinusIcon } from "./icons";
import { IAnnounce } from "@/interfaces/announce";
import { toast } from "sonner";
import { createNewAnnounce } from "@/firebase/services/announces_services";

const INITIAL_DATA: IAnnounce = {
  title: "",
  description: "",
  rules: "",
  reward: ""
}

export const AnnounceForm = () => {

  const rulesRef = useRef<HTMLInputElement | null>(null);
  const rewardRef = useRef<HTMLInputElement | null>(null);

  const [announceData, setAnnounceData] = useState<IAnnounce>(INITIAL_DATA);
  const [showRules, setShowRules] = useState(false);
  const [ShowReward, setShowReward] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnnounceData({
      ...announceData,
      [e.target.name]: e.target.value
    });
  }

  const handleClickRules = () => {
    if (showRules) {
      setShowRules(false);
      setAnnounceData({ ...announceData, rules: "" });
    } else {
      setShowRules(true);
      rulesRef.current?.focus();
    }
  }

  const handleClickReward = () => {
    if (ShowReward) {
      setShowReward(false);
      setAnnounceData({ ...announceData, reward: "" });
    } else {
      setShowReward(true);
      rulesRef.current?.focus();
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description } = announceData;

    // validación
    if ([title, description].includes("")) {
      toast.error("El título y la descripción son obligatorios");
      return;
    }

    toast.promise(createNewAnnounce(announceData), {
      loading: 'Cargando...',
      success: (data) => {
        setAnnounceData(INITIAL_DATA);
        setShowRules(false);
        setShowReward(false);
        return "El anuncio fue creado correctamente";
      },
      error: (error) => {
        console.log(error);
        return "No se pudo crear el anuncio"
      },
    });
  }

  return (
    <form
      className="flex flex-col gap-6 max-w-xl w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Título"
        placeholder="Título del anuncio"
        labelPlacement="outside"
        size="lg"
        fullWidth
        name="title"
        value={announceData.title}
        onChange={handleChange}
      />
      <Textarea
        label="Descripción"
        labelPlacement="outside"
        placeholder="Descripción del anuncio"
        fullWidth
        name="description"
        value={announceData.description}
        onChange={handleChange}
      />
      {
        showRules ? (
          <div className="flex flex-col gap-4">
            <Button
              startContent={<MinusIcon />}
              variant="bordered"
              className="w-auto"
              onClick={handleClickRules}
            >
              Eliminar reglas
            </Button>
            <div>
              <p className="text-default-400 my-0">Crea cada regla usando el simbolo -, ejemplo:</p>
              <p className="text-default-400 my-0">- Mi primera regla.</p>
            </div>
            <Textarea
              ref={rulesRef}
              label="Reglas"
              labelPlacement="outside"
              placeholder="Reglas del anuncio"
              fullWidth
              name="rules"
              value={announceData.rules}
              onChange={handleChange}
            />
          </div>
        ) : (
          <Button
            startContent={<AddIcon />}
            variant="bordered"
            className="w-auto"
            onClick={handleClickRules}
          >
            Crear reglas
          </Button>
        )
      }
      {
        ShowReward ? (
          <div className="flex flex-col gap-4">
            <Button
              startContent={<MinusIcon />}
              variant="bordered"
              className="w-auto"
              onClick={handleClickReward}
            >
              Eliminar recompensa
            </Button>
            <Input
              ref={rewardRef}
              type="text"
              label="Recompensa"
              placeholder="Ej: 25$"
              labelPlacement="outside"
              size="lg"
              fullWidth
              name="reward"
              value={announceData.reward}
              onChange={handleChange}
            />
          </div>
        ) : (
          <Button
            startContent={<AddIcon />}
            variant="bordered"
            className="w-auto"
            onClick={handleClickReward}
          >
            Crear recompensa
          </Button>
        )
      }
      <div className="w-full mt-4">
        <Button
          size="lg"
          color="danger"
          variant="shadow"
          className="font-medium uppercase"
          type="submit"
          fullWidth
        >
          Crear anuncio
        </Button>
      </div>
    </form>
  )
}
