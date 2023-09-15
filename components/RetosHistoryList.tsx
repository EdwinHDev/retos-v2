"use client"

import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Checkbox,
  Tooltip,
  user,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { columns, statusOptions } from "@/data/data";
import { capitalize } from "@/utils/capitalize";
import { VerticalDotsIcon, SearchIcon, ChevronDownIcon, PlusIcon, DeleteIcon } from "./icons";
import { db } from "@/firebase/config";
import { DocumentData, query, collection, orderBy, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { checkDate, formatDate } from "@/utils/dateUtils";
import Confetti from "./Confetti";
import { AuthContext } from "@/context/auth";
import { toast } from "sonner";
import { deleteRetoById, finishStateReto } from "@/firebase/services/retos_services";
import { subtitle } from "./primitives";
import LoadingRetosHomeList from "./LoadingRetosHomeList";
import LoadingRetosHistoryList from "./LoadingRetosHistoryList";

const statusColorMap: Record<string, ChipProps["color"]> = {
  terminado: "success",
  fallido: "danger",
  proceso: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "reto", "status", "finish", "actions"];

export default function RetosHistoryList() {

  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [retos, setRetos] = useState<DocumentData[]>([]);
  const [id, setId] = useState("");
  const [explode, setExplode] = useState(false);
  const [retoStatus, setRetoStatus] = useState("");

  useEffect(() => {
    const q = query(collection(db, "retos"), orderBy("timestampCreated", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const docs: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setLoading(false);
      setRetos(docs);
    });
  }, []);

  const explodeConffeti = () => {
    setExplode(true);
    setTimeout(() => {
      setExplode(false);
    }, 6000);
  }

  const deleteReto = async (status: string) => {
    setRetoStatus(status);
    if (status === "proceso") {
      toast.error("No puedes eliminar este reto, aun no se ha finalizado");
      return;
    }

    onOpen();
  }

  // TODO: No autorizar a otros que no sean los dueños de borrar
  const comfirmDeleteReto = async (id: string) => {
    try {
      await deleteRetoById(id);

      const userRef = doc(db, "users", user?.id);

      if (retoStatus === "proceso") {
        await updateDoc(userRef, {
          "retos.progress": Number(user?.retos.progress! > 0 ? (user?.retos.progress! - 1) : user?.retos.progress!),
          "score": user?.score > 0 ? (user?.score - 1) : user?.score
        });
      }
      if (retoStatus === "terminado") {
        await updateDoc(userRef, {
          "retos.completed": Number(user?.retos.completed! > 0 ? (user?.retos.completed! - 1) : user?.retos.completed!),
          "score": user?.score > 0 ? (user?.score - 1) : user?.score
        });
      }
      if (retoStatus === "fallido") {
        await updateDoc(userRef, {
          "retos.failed": Number(user?.retos.failed! > 0 ? (user?.retos.failed! - 1) : user?.retos.failed!),
          "score": user?.score > 0 ? (user?.score - 1) : user?.score
        });
      }

      onClose();
      toast.success("Reto eliminado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Algo salio mal, no se pudo eliminar el reto");
      onClose();
    }
  }

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredRetos = [...retos];

    if (hasSearchFilter) {
      filteredRetos = filteredRetos.filter((reto) =>
        reto.owner.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredRetos = filteredRetos.filter((reto) =>
        Array.from(statusFilter).includes(reto.status),
      );
    }

    return filteredRetos;
  }, [retos, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: DocumentData, b: DocumentData) => {
      const first = a[sortDescriptor.column as keyof DocumentData] as number;
      const second = b[sortDescriptor.column as keyof DocumentData] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((reto: DocumentData, columnKey: React.Key, user: DocumentData, explode: boolean) => {
    const cellValue = reto[columnKey as keyof DocumentData];

    async function finishReto() {
      if (reto.status === "proceso" && !checkDate(reto.endDate)) {
        try {
          finishStateReto(reto.id);

          const userRef = doc(db, "users", user?.id);
          await updateDoc(userRef, {
            "retos.completed": Number(user?.retos.completed!) +1,
            "retos.progress": Number(user?.retos.progress!) -1,
          });

          toast.success("Enhorabuena, has feinalizado tu reto!!!");
          explodeConffeti();
        } catch (error) {
          console.log(error);
          toast.error("Algo salio mal, no puedes finalizar el rero");
        }
      } else {
        console.log("no puedes")
      }
    }

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: reto.photoURL }}
            description={formatDate(reto.startDate)}
            name={reto.owner}
          >
            {reto.owner}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col min-w-[160px]">
            <p className="text-bold text-sm line-clamp-2">{cellValue}</p>
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
          <div className="relative flex justify-end items-center gap-2">
            <div className="relative flex items-center gap-3">
              {
                user?.id === reto.ownerId && (
                  <Tooltip content="Eliminar">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={() => {
                        deleteReto(reto.status);
                        setId(reto.id);
                      }}
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                )
              }
              {
                user?.id === reto.ownerId && (
                  <Tooltip content={reto.status === "proceso" ? "Finalizar reto" : reto.status === "terminado" ? "Reto finalizado" : "Reto fallido"}>
                    <div>
                      {explode && <Confetti />}
                      <Checkbox
                        isDisabled={reto.status === "proceso" ? false : reto.status === "terminado" ? true : true}
                        isSelected={reto.status === "proceso" ? false : reto.status === "terminado" ? true : false}
                        color="success"
                        onClick={finishReto}
                      />
                    </div>
                  </Tooltip>
                )
              }

            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por nombre..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Estado
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Estado"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Columnas"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">{retos.length} Retos</span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    hasSearchFilter,
    retos.length
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  if (loading) {
    return (
      <LoadingRetosHistoryList />
    )
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
      <Table
        aria-label="tabla de participantes"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
        selectedKeys={selectedKeys}
        selectionMode="single"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No hay retos disponibles"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey, user!, explode)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
