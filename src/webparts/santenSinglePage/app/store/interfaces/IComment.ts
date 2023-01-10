export interface IResponseComment {
  id: number;
  content: string;
  createdDate: string;
  likes: number;
  userId: number;
}

export interface IParsedComment {
  id: number;
  content: string;
  createdDate: string;
  likes: number;
  author: string;
  role: string;
  avatar: string;
}
