import { PostImage } from "./PostImage";
import { User } from "./Uset";

export interface Post {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[];
}
