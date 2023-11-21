export interface ICometary {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export interface IDataCometary {
  comments: ICometary[];
  limit: number;
  skip: number;
  total: number;
}
