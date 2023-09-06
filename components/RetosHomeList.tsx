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
import React from "react";
import { EditIcon, DeleteIcon, EyeIcon } from "./icons";
import { users, columns } from "@/data/data";

const statusColorMap: Record<string, ChipProps["color"]> = {
  terminado: "success",
  fallido: "danger",
  proceso: "warning",
};

type User = (typeof users)[0];

export default function RetosHomeList() {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.startDate}
            name={cellValue}
            className="min-w-max"
          >
            {user.email}
          </User>
        );
      case "reto":
        return (
          <div className="flex flex-col min-w-[160px]">
            <p className="text-bold text-sm">{cellValue}</p>
            <p className="text-bold text-sm text-default-400">
              {user.company}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
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
              {user.endDate}
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
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
