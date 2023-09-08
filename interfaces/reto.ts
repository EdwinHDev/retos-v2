
export interface IReto {
  id?: string;
  owner: string;
  photoURL: string;
  startDate: string;
  reto: string;
  company: string;
  status: "terminado" | "proceso" | "fallido";
  endDate: string;
}