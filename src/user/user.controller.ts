import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Usertbl } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    addProduct(@Body() user: Usertbl) {
        return this.userService.insertUser(user);
    }

    @Get()
    AllProduct() {
        return this.userService.findAllUser()

    }

    @Get(':id')
    SingleProduct(@Param('id') id: string) {
        return this.userService.getSingleUser(id);
    }

    @Patch(':id')
    updateStore(@Param('id') id: string, @Body() user: Usertbl) {
        return this.userService.getUpdateStore(id, user);
    }

    @Delete(':id')
    removeStore(@Param('id') storeid: string) {
        return this.userService.DeleteUser(storeid)
    }
}
