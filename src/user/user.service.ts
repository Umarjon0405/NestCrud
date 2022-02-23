import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }
    
    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User>{
        return this.userRepository.findOne(id)
    }

    async create(createUserDto: CreateUserDto): Promise<User>{
        const user = await this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async update(updateUserDto: UpdateUserDto, id: number): Promise<User> {
        const user = await this.userRepository.findOne(id);
        await this.userRepository.merge(user, updateUserDto);
        return await this.userRepository.save(user);
    }

    delete(id: number) {
        return this.userRepository.delete(id); 
    }
}
