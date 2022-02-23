import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: string | number): Promise<import("../entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    update(id: string | number, updateUserDto: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    delete(id: string | number): void;
}
