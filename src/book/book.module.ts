import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Booktbl } from './book.entity';
import { UserBook } from 'src/user-book/user-book.entity';
import { UserBookModule } from 'src/user-book/user-book.module';
import { UserBookService } from 'src/user-book/user-book.service';

@Module({
  imports: [UserBookModule,TypeOrmModule.forFeature([Booktbl]) ],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookModule]
  
})
export class BookModule {}
