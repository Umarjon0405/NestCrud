import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
    
    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param() id: string|number) {
        return this.userService.findOne(+id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto )
    }

    @Put(':id')
    update(@Param() id: string|number, @Body() updateUserDto: UpdateUserDto)
    {
        return this.userService.update(updateUserDto, +id);
    }

    @Delete(':id')
    delete(@Param() id: string|number) {
        this.userService.delete(+id)
    } 
}
