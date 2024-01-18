"use client";

import { Button, Checkbox, Chip, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { AddIcon, ImageAddIcon, ImageIcon, MinusIcon } from "./icons";
import { IAnnounce } from "@/interfaces/announce";
import { toast } from "sonner";
import { createNewAnnounce } from "@/firebase/services/announces_services";
import { ref } from 'firebase/storage';
import Image from "next/image";
import { ImagePrev } from "./ImagePrev";

const INITIAL_DATA: IAnnounce = {
  title: "",
  description: "",
  rules: "",
  reward: ""
}

export const ranking = [
  {label: "Bronce", value: "bronce"},
  {label: "Plata", value: "plata"},
  {label: "Oro", value: "oro"},
  {label: "Platino", value: "platino"},
  {label: "Diamante", value: "diamante"},
];

export const retos = [
  {label: "Principios de Js", value: "a2sd13a21sd5s5s5"},
  {label: "CRUD LocalStorage", value: "asd15as6d842sa6s"},
  {label: "CRUD modular indexDB", value: "gfjh1g5sa65dj1jk"},
];

export const RetosGrupales = () => {

  const fileRef = useRef<HTMLInputElement | null>(null);

  const [announceData, setAnnounceData] = useState<IAnnounce>(INITIAL_DATA);
  const [images, setImages] = useState<FileList | null>(null);
  const [imagesArr, setImagesArr] = useState<File[]>([]);

  useEffect(() => {
    if(images && images.length > 0) {
      const filesArray = Array.from(images);
      const newArr = [...imagesArr];

      filesArray.forEach(element => {
        newArr.push(element);
      });
      setImagesArr(newArr);
    }
  }, [ images ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnnounceData({
      ...announceData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description } = announceData;

    // validación
    if ([title, description].includes("")) {
      toast.error("El título y la descripción son obligatorios");
      return;
    }

  }

  return (
    <form
      className="flex flex-col gap-6 max-w-xl w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-default-800">Reto</h2>
      <section className="flex gap-6 items-center">
        <Input
          type="text"
          placeholder="Título del reto"
          labelPlacement="outside"
          size="lg"
          fullWidth
          name="title"
          value={announceData.title}
          onChange={handleChange}
        />
        <Checkbox
          color="danger"
        >Anuncio</Checkbox>
      </section>
      <Textarea
        labelPlacement="outside"
        placeholder="Descripción del reto"
        fullWidth
        name="description"
        value={announceData.description}
        onChange={handleChange}
      />
      <section className="flex gap-4 flex-wrap">
        <section className="group">
          <figure
            className="w-20 h-20 flex justify-center items-center rounded-2xl border-2 border-dashed border-default-200 group-hover:border-default-300 cursor-pointer"
            onClick={() => fileRef.current?.click()}
          >
            <ImageAddIcon width={32} height={32} className="stroke-default-200 group-hover:stroke-default-300" />
          </figure>
        </section>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          multiple
          onChange={(e) => setImages(e.target.files!)}
        />
        {
          imagesArr.length > 0 && imagesArr.map((file, index) => (
            <ImagePrev
              key={index}
              file={file}
              fileList={imagesArr}
              setFileList={setImagesArr}
            />
          ))
        }
      </section>

      <h2 className="text-default-800">Requisitos</h2>
      <Input
          type="number"
          placeholder="Escribe el valor del score"
          size="lg"
          fullWidth
        />
      <Select
        items={ranking}
        placeholder="Elije el ranking"
        fullWidth
      >
        {(ranking) => <SelectItem key={ranking.value}>{ranking.label}</SelectItem>}
      </Select>
      <section>
        <Select
          items={retos}
          placeholder="Elije un reto"
          fullWidth
          className="mb-2"
        >
          {(reto) => <SelectItem key={reto.value}>{reto.label}</SelectItem>}
        </Select>
        <section className="flex gap-2 flex-wrap">
          <Chip onClose={() => console.log("close")}>Principios de Js</Chip>
        </section>
      </section>
      
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
