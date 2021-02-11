import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Booktbl } from './book.entity';
import { BookService } from './book.service';
import { ReadBookDTO } from './ReadBookDto';

@Controller('book')
export class BookController {
    constructor(private serviceBook: BookService) { }

    @Get('author/:authorId')
    getBooksByAuthor(
        @Param('authorId') authorId: string): Promise<ReadBookDTO[]> {
        return this.serviceBook.getBookByAuthor(authorId);
    }

    @Post()
    addProduct(@Body() book: Booktbl) {
        return this.serviceBook.insertBook(book);
    }

    @Get()
    AllProduct() {
        return this.serviceBook.findAllBook()

    }

    @Get(':id')
    SingleProduct(@Param('id') id: string) {
        return this.serviceBook.getSingleBook(id);
    }

    @Patch(':id')
    updateStore(@Param('id') id: string, @Body() Book: Booktbl) {
        return this.serviceBook.getUpdateBook(id, Book);
    }

    @Delete(':id')
    removeStore(@Param('id') id: string) {
        return this.serviceBook.DeleteBook(id)
    }

}

