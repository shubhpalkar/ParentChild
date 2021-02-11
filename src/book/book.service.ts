import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { UserBook } from 'src/user-book/user-book.entity';
import { UserBookModule } from 'src/user-book/user-book.module';
import { UserBookService } from 'src/user-book/user-book.service';
import { Usertbl } from 'src/user/user.entity';
import { createQueryBuilder, EntityManager, getManager, In, Repository } from 'typeorm';
import { Booktbl } from './book.entity';
import { ReadBookDTO } from './ReadBookDto';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Booktbl) private BookRepo: Repository<Booktbl>
        , private ubService: UserBookService) { }

    async getBookByAuthor(authodId: string): Promise<any> {

        const Booktbl: Booktbl[] = await this.BookRepo.createQueryBuilder('Booktbl')
            .leftJoinAndSelect("books.authors", "users")
            .where('books.status = :status', { status: "ACTIVE" })
            .andWhere("users.id = :id ", { id: authodId })
            .getMany();

        console.log(Booktbl);
        return Booktbl;
    }

    insertBook(book: Booktbl): Promise<any> {
        const newBook = this.BookRepo.save(book);
        return newBook;
    }

    findAllBook() {
        return this.BookRepo.find();
    }


    getSingleBook(id: string) {
        return this.BookRepo.findOne({ where: id })
    }


    getUpdateBook(id: string, Book: Booktbl) {
        const checkID = this.BookRepo.findOne(id).then

        if (!checkID) {
            throw new Error("Book is not found......");
        }

        this.BookRepo.update(id, Book);

        HttpStatus.OK

        this.ubService.updatefromBook(id, Book)
    }

    DeleteBook(id: string) {

        const data = this.BookRepo.findOne(id);

        if (!data) {
            throw new Error("Book is not found ....");
        }

        this.BookRepo.delete(id);
        HttpStatus.MOVED_PERMANENTLY;

        this.ubService.deletedetailBook(id);
    }

}

