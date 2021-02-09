import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Booktbl } from './book.entity';

@Module({
  imports: [UserModule,TypeOrmModule.forFeature([Booktbl])],
  providers: [BookService],
  controllers: [BookController],
  
})
export class BookModule {}
