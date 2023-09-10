
export const columns = [
  { name: "NOMBRE", uid: "name"},
  { name: "RETO", uid: "reto" },
  { name: "ESTADO", uid: "status", sortable: false },
  { name: "FINALIZA", uid: "finish" },
  { name: "ACCIONES", uid: "actions" },
];

export const statusOptions = [
  {name: "terminado", uid: "terminado"},
  {name: "fallido", uid: "fallido"},
  {name: "proceso", uid: "proceso"},
];