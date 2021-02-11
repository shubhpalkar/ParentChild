import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booktbl } from 'src/book/book.entity';
import { BookModule } from 'src/book/book.module';
import { UserBookModule } from 'src/user-book/user-book.module';
import { UserController } from './user.controller';
import { Usertbl } from './user.entity';
import { UserService } from './user.service';

@Module({
    imports: [UserBookModule,TypeOrmModule.forFeature([Usertbl])],
    providers: [UserService],
  controllers: [UserController],
  exports: [UserModule]
})
export class UserModule {
    
}
