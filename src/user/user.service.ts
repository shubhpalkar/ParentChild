import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { UserBookService } from 'src/user-book/user-book.service';
import { Repository } from 'typeorm';
import { Usertbl } from './user.entity';

@Injectable()
export class UserService {
    constructor (@InjectRepository(Usertbl) private userRepo: Repository<Usertbl>, 
    private ubService: UserBookService){}

    insertUser(user: Usertbl): Promise<any>{
        const newUser = this.userRepo.save(user);
        return newUser;
        console.log ('User has been Added ...');
        
    }

    findAllUser(){
        return this.userRepo.find();
    }


    getSingleUser(id: string) {
        return this.userRepo.findOne({where: id})
    }


    getUpdateStore(id:string,user: Usertbl) {
        const checkID = this.userRepo.findOne(id)
        
        if (!checkID) {
            throw new Error("User is not found......");
        }
        
          this.userRepo.update(id, user);
          HttpStatus.OK
          console.log("Usertbl", id, user)          

          this.ubService.UpdateFromUser(id, user)
    }

    DeleteUser(id: string) {

        const data = this.userRepo.findOne(id);

        if (!data){
            throw new Error("User is not found ....");
        }

     this.userRepo.delete(id);
     HttpStatus.OK

     this.ubService.deleteubUser(id)
    }

}
