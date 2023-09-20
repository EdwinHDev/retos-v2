
export interface IAnnounce {
  id?: string;
  title: string;
  description: string;
  rules?: string;
  reward?: string;
  state?: "active" | "inactive";
}