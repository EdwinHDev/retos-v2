"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { CloseIcon } from "./icons";

interface Props {
  file: File;
  fileList: File[];
  setFileList: Dispatch<SetStateAction<File[]>>;
}

export const ImagePrev = ({ file, fileList, setFileList }: Props) => {

  const [imageReader, setImageReader] = useState<string>("");

  console.log(fileList)

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = function (e: any) {
      setImageReader(e.target.result);
    }
    reader.readAsDataURL(file);
  }, []);

  const close = (name: string) => {
    const updateFiles = fileList.filter(file => file.name !== name);
    setFileList(updateFiles);
  }

  if (imageReader === "") {
    return (
      <Spinner />
    )
  }

  return (
    <section className="relative">
      <section
        className="absolute -top-[5px] -right-[5px]"
        onClick={() => close(file.name)}
      >
        <CloseIcon className="fill-default-100 stroke-danger-500 hover:stroke-danger-300 cursor-pointer" />
      </section>
      <figure
        className="w-20 h-20 flex justify-center items-center rounded-2xl overflow-hidden"
      >
        <Image width={80} height={80} src={imageReader} alt={file.name} className="w-20 h-20 object-cover overflow-hidden" />
      </figure>
    </section>
  )
}
