"use client";

import {
  ChipProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
  useDisclosure,
} from "@nextui-org/react";
import React, { useContext, useState, useEffect } from "react";
import { RetosContext } from "@/context/retos";
import { DocumentData } from "firebase/firestore";
import { AuthContext } from "@/context/auth";
import LoadingRetosHomeList from "./LoadingRetosHomeList";
import { getTopRanking } from "@/firebase/services/auth_services";
import { TopIcon } from "./icons";

const columns = [
  { name: "TOP", uid: "position"},
  { name: "NOMBRE", uid: "name"},
  { name: "TERMINADOS", uid: "completed" },
  { name: "FALLIDOS", uid: "failed" },
  { name: "PROGRESO", uid: "progress" },
  { name: "CLASIFICACIÓN", uid: "classification" },
  { name: "SCORE", uid: "score" },
];

export default function RankingList() {

  const [topRanking, setTopRanking] = useState<DocumentData[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRanking = async () => {
      try {
        await getTopRanking(setTopRanking, 100);
      } catch (error) {
        console.log(error);
      }
    }
    getRanking();
  }, []);

  useEffect(() => {
    if(topRanking !== undefined) {
      setLoading(false);
    }
  }, [topRanking]);

  const renderCell = React.useCallback((user: DocumentData, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof DocumentData];

    switch (columnKey) {
      case "position":
        return (
          <div className="flex flex-col min-w-max">
            <p className="text-bold text-sm text-default-400">
              {user.position}
            </p>
          </div>
        );
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.photoURL }}
            name={user.displayName}
            className="min-w-max"
          >
            {user.displayName}
          </User>
        );
      case "completed":
        return (
          <div className="flex flex-col min-w-max">
            <p className="text-bold text-sm text-success-500">
              {user.retos.completed}
            </p>
          </div>
        );
        case "failed":
        return (
          <div className="flex flex-col min-w-max">
            <p className={`text-bold text-sm ${user.retos.failed > 0 ? "text-danger-500" : "text-default-400"}`}>
              {user.retos.failed}
            </p>
          </div>
        );
        case "progress":
        return (
          <div className="flex flex-col min-w-max">
            <p className={`text-bold text-sm ${user.retos.progress > 0 ? "text-warning-500" : "text-default-400"}`}>
              {user.retos.progress}
            </p>
          </div>
        );
        case "classification":
        return (
          <div className="flex flex-col min-w-max">
            {
                user.score > 0 ? (
                  user.score >= 100 ? (
                    <div className="flex gap-2 items-center">
                      <TopIcon className="fill-cyan-400"/>
                      <p className="font-semibold text-cyan-400">Diamante</p>
                    </div>
                  ) : (
                    user.score >= 70 ? (
                      <div className="flex gap-2 items-center">
                        <TopIcon className="fill-emerald-400"/>
                        <p className="font-semibold text-emerald-400">Platino</p>
                      </div>
                    ) : (
                      user.score >= 45 ? (
                        <div className="flex gap-2 items-center">
                          <TopIcon className="fill-amber-400"/>
                          <p className="font-semibold text-amber-400">Oro</p>
                        </div>
                      ) : (
                        user.score >= 20 ? (
                          <div className="flex gap-2 items-center">
                            <TopIcon className="fill-zinc-400"/>
                            <p className="font-semibold text-zinc-400">Plata</p>
                          </div>
                        ) : (
                          <div className="flex gap-2 items-center">
                            <TopIcon className="fill-[#ad8865]"/>
                            <p className="font-semibold text-[#ad8865]">Bronce</p>
                          </div>
                        )
                      )
                    )
                  )
                ) : (
                  <p className="font-semibold text-default-300">Sin clasificación</p>
                )
              }
          </div>
        );
        case "score":
        return (
          <div className="flex flex-col min-w-max">
            <p className="text-bold text-sm text-default-400">
              {user.score}
            </p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  if (loading) {
    return (
      <LoadingRetosHomeList />
    )
  }

  return (
    <Table
        aria-label="tabla de participantes"
        selectionMode="single"
      >
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
        <TableBody items={topRanking} emptyContent={"No hay retadores disponibles"}>
          {(user) => (
            <TableRow key={user.id}>
              {(columnKey) => (
                <TableCell>{renderCell(user!, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
  );
}
