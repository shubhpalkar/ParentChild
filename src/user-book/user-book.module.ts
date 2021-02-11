import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookController } from './user-book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBook } from './user-book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserBook])],
  providers: [UserBookService],
  controllers: [UserBookController],
  exports: [UserBookModule, UserBookService]
})
export class UserBookModule {}
