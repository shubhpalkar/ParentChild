import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usertbl } from './user.entity';

@Injectable()
export class UserService {
    constructor (@InjectRepository(Usertbl) private userRepo: Repository<Usertbl>){}

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


    getUpdateStore(id:string,user: Usertbl) : Promise<any>{
        const checkID = this.userRepo.findOne(id)
        
        if (!checkID) {
            throw new Error("User is not found......");
        }
        
        return this.userRepo.update(id, user);
    }

    DeleteUser(id: string) {

        const data = this.userRepo.findOne(id);

        if (!data){
            throw new Error("User is not found ....");
        }

        return this.userRepo.delete(id);
    }

}
