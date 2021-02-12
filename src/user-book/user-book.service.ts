import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booktbl } from 'src/book/book.entity';
import { BookService } from 'src/book/book.service';
import { Usertbl } from 'src/user/user.entity';
import { createQueryBuilder, getConnection, Repository } from 'typeorm';
import { UserBook } from './user-book.entity';

@Injectable()
export class UserBookService {
    constructor(@InjectRepository(UserBook) private uerbookRepo: Repository<UserBook>){}
    

    async getData() {
        const userdata = await createQueryBuilder("user")
            .leftJoinAndSelect("user.UserBooks", "UserBook")
            .where("user.id = :id", { id: 1 })
            .getOne();
    }

    async addDetailbook(bkdata: UserBook): Promise<any> {
        console.log("Model data ...", bkdata);
        return this.uerbookRepo.save(bkdata)
    }

    getAllData(): Promise<UserBook[]> {
        // console.log ("UserBook get data")
        return this.uerbookRepo.find()
    }

    deleteBook(id: string){
        this.uerbookRepo.delete(id)
    }

    deleteubUser(id: string){
        this.uerbookRepo.delete(id)
    }

    updatefromBook(id: string, Book: Booktbl){
        const data = this.uerbookRepo.findOne({where: {Bookid: id}})
         if (!data){
             throw new HttpException ("Book id is not found ...", HttpStatus.NOT_FOUND)
         }

         this.uerbookRepo.createQueryBuilder().update(UserBook)
         .set({BookName: Book.name})
         .where({Bookid: id})
         .execute();
    }

    deletedetailBook(id: string){
        const result = this.uerbookRepo.findOne({where: {"Bookid": id}})
        if(!result){
            throw new HttpException ("Book not found...", HttpStatus.NOT_FOUND)
        }
        this.uerbookRepo.delete(id)
        console.log ("Book is deleted and belonging UserHasBook aslo deleted..")
    }

    updateUB(id: string, bkdata: UserBook): Promise<any>{
        const result = this.uerbookRepo.findOne(id)
        if(!result){
            throw new HttpException ("Detail is not matching with database...", HttpStatus.NOT_FOUND)
        }

        return this.uerbookRepo.update(id, bkdata);
    }

    UpdateFromUser(id, user){
        console.log ("Entery at userhasBook table ....")

        const data = this.uerbookRepo.findOne({where: {userId: id}})
        if (!data){
            throw new HttpException ("User id is not found ...", HttpStatus.NOT_FOUND)
        }

        console.log("updateFromuser..", id)
        this.uerbookRepo.createQueryBuilder().update(UserBook)
        .set({Uname: user.username, Uemail: user.email})
        .where({userId: id})
        .execute(); 
    }
}
