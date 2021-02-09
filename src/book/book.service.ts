import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usertbl } from 'src/user/user.entity';
import { In, Repository } from 'typeorm';
import { Booktbl } from './book.entity';
import { ReadBookDTO } from './ReadBookDto';

@Injectable()
export class BookService {

    constructor ( @InjectRepository(Booktbl) private BookRepo: Repository<Booktbl>,
        @InjectRepository(Usertbl) private userRepo: Repository<Usertbl>
   ){}

    async getBookByAuthor(authodId: string): Promise<any>{

        const Booktbl: Booktbl[] = await this.BookRepo.createQueryBuilder('Booktbl')
                 .leftJoinAndSelect("books.authors", "users")
                 .where('books.status = :status',{status : "ACTIVE"})
                 .andWhere("users.id = :id ", { id: authodId })
                  .getMany();

        console.log(Booktbl);
        return Booktbl;
        
        // return Booktbl.map( Booktbl => plainToClass (ReadBookDTO, Booktbl));
    }

    insertBook(book: Booktbl): Promise<any> {
        const newBook = this.BookRepo.save(book);
        return newBook;
    }

    findAllBook(){
        return this.BookRepo.find();
    }


    getSingleBook(id: string) {
        return this.BookRepo.findOne({where: id})
    }


    getUpdateBook(id:string,Book: Booktbl) : Promise<any>{
        const checkID = this.BookRepo.findOne(id)
        
        if (!checkID) {
            throw new Error("Book is not found......");
        }
        
        return this.BookRepo.update(id, Book);
    }

    DeleteBook(id: string) {

        const data = this.BookRepo.findOne(id);

        if (!data){
            throw new Error("Book is not found ....");
        }

        return this.BookRepo.delete(id);
    }

}
