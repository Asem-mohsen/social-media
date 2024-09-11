import { Comment } from "./comment";
import { User } from "./user";

export interface Post {
  id : string;
  body : string | null;
  image : string | null;
  user: User;
  createdAt : string;
  comments : Comment[];
}

export interface CreatePost {
  body : string | null;
  image : string | null;
}
