import { Booktbl } from "src/book/book.entity";

export class UserDetails{

    id: number;
  username: string;
  email: string;
  password: string;
//   details: UserDetails;
  books: Booktbl[];
}