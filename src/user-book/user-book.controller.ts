import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { Booktbl } from 'src/book/book.entity';
import { UserBook } from './user-book.entity';
import { UserBookService } from './user-book.service';

@Controller('user-book')
export class UserBookController {
    constructor(private userBookService: UserBookService) { }

    @Post()
    addDetail(@Body() bkdata: UserBook) {
        return this.userBookService.addDetailbook(bkdata)
    }

    @Get()
    showTable() {
        return this.userBookService.getAllData()
    }

    @Delete(':id')
    removeuserbook(@Param('id') id: string) {
        return this.userBookService.deleteBook(id);
    }

    @Patch(':id')
    updateUB(@Param('id') id: string, @Body() bkdata: UserBook){
        return this.userBookService.updateUB(id, bkdata)
    }
}
