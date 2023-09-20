interface retos {
  completed: number;
  failed: number;
  progress: number;
}

export interface IUser {
  id?: string;
  displayName: string;
  email: string;
  photoURL?: string;
  emailVerified?: boolean;
  password: string;
  retos?: retos;
  score?: number;
  role?: "admin" | "client";
}