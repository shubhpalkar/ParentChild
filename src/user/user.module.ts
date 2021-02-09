import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from 'src/book/book.module';
import { UserController } from './user.controller';
import { Usertbl } from './user.entity';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usertbl])],
    providers: [UserService],
  controllers: [UserController],
  exports: [UserModule, TypeOrmModule.forFeature([Usertbl])]
})
export class UserModule {
    
}
