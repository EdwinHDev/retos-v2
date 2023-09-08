
export interface IUser {
  id?: string;
  displayName: string;
  email: string;
  photoURL?: string;
  emailVerified?: boolean;
  password: string;
}