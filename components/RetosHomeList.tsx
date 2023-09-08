"use client";

import {
  Chip,
  ChipProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import React, { useContext } from "react";
import { EditIcon, DeleteIcon, EyeIcon } from "./icons";
import { columns } from "@/data/data";
import { RetosContext } from "@/context/retos";
import { DocumentData } from "firebase/firestore";

const statusColorMap: Record<string, ChipProps["color"]> = {
  terminado: "success",
  fallido: "danger",
  proceso: "warning",
};

export default function RetosHomeList() {

  const { retos, loading } = useContext(RetosContext);

  const renderCell = React.useCallback((reto: DocumentData, columnKey: React.Key) => {
    const cellValue = reto[columnKey as keyof DocumentData];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: reto.photoURL }}
            description={reto.startDate}
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
              {reto.endDate}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            {/* <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip> */}
            {/* <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  if(loading) {
    return <p>Cargando datos...</p>
  }

  return (
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
              <TableCell>{renderCell(reto, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
