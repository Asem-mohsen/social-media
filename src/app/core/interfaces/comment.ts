import { User } from "./user";

export interface Comment {
  id: string;
  content : string;
  post : string;
  createdAt : string;
  commentCreator: User;
}
