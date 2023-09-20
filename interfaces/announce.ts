export interface IView {
  userNameView: string;
  userIdView: string;
  userImageView: string;
}

export interface IAnnounce {
  id?: string;
  title: string;
  description: string;
  rules?: string;
  reward?: string;
  state?: "active" | "inactive";
  view?: IView[];
}