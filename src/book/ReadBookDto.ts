import { Usertbl } from "src/user/user.entity";
import { Booktbl } from "./book.entity";
import { BookModule } from "./book.module";

export class ReadBookDTO {

    // id: number;
    // name: string;
    // description: string;
    // authors: Usertbl[];
    // status: string;
    // createdAt: Date;
    // updatedAt: Date;

    authorId: number;
    author: string;
    bookid: Booktbl[];
    bookName: BookModule[]
}