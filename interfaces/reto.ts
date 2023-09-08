
export interface IReto {
  id?: string;
  owner: string;
  ownerId: string;
  photoURL: string;
  startDate: Date;
  reto: string;
  company: string;
  status: "terminado" | "proceso" | "fallido";
  endDate: Date;
}