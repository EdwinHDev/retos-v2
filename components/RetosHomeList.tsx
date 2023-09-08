"use client";

import {
  Button,
  Chip,
  ChipProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
  useDisclosure,
} from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { EditIcon, DeleteIcon, EyeIcon } from "./icons";
import { columns } from "@/data/data";
import { RetosContext } from "@/context/retos";
import { DocumentData, Timestamp } from "firebase/firestore";
import { formatDate, checkDate } from "@/utils/dateUtils";
import { toast } from "sonner";
import { deleteRetoById } from "@/firebase/services/retos_services";
import { subtitle } from "./primitives";
import { AuthContext } from "@/context/auth";

const statusColorMap: Record<string, ChipProps["color"]> = {
  terminado: "success",
  fallido: "danger",
  proceso: "warning",
};

export default function RetosHomeList() {

  const { retos, loading } = useContext(RetosContext);
  const { user } = useContext(AuthContext);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [id, setId] = useState("");

  const deleteReto = async (endDate: Timestamp) => {
    if (!checkDate(endDate)) {
      toast.error("No puedes eliminar este reto, aun no se ha finalizado");
      return
    }

    onOpen();
  }

  const comfirmDeleteReto = async (id: string) => {
    try {
      await deleteRetoById(id);
      onClose();
      toast.success("Reto eliminado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Algo salio mal, no se pudo eliminar el reto");
      onClose();
    }
  }

  const renderCell = React.useCallback((reto: DocumentData, columnKey: React.Key, user: DocumentData) => {
    const cellValue = reto[columnKey as keyof DocumentData];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: reto.photoURL }}
            description={formatDate(reto.startDate)}
            name={reto.owner}
            className="min-w-max"
          >
            {reto.owner}
          </User>
        );
      case "reto":
        return (
          <div className="flex flex-col min-w-[160px]">
            <p className="text-bold text-sm">{cellValue}</p>
            <p className="text-bold text-sm text-default-400">
              {reto.company}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[reto.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "finish":
        return (
          <div className="flex flex-col min-w-max">
            <p className="text-bold text-sm text-default-400">
              {formatDate(reto.endDate)}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            {
              user?.id === reto.ownerId && (
                <Tooltip content="Eliminar">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  deleteReto(reto.endDate);
                  setId(reto.id);
                }}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
              )
            }
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">Eliminar reto</ModalHeader>
              <ModalBody>
                <h2 className={subtitle()}>¿Estas seguro que deseas eliminar este reto?</h2>
              </ModalBody>
              <ModalFooter>
                <Button size="lg" color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  size="lg"
                  color="danger"
                  className="font-medium"
                  onPress={() => comfirmDeleteReto(id)}
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Table aria-label="tabla de participantes">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={retos} emptyContent={"No hay retos disponibles"}>
          {(reto) => (
            <TableRow key={reto.id}>
              {(columnKey) => (
                <TableCell>{renderCell(reto, columnKey, user!)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
