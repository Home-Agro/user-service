import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // @Get(':id')
  // getOne(@Param('id') id: number): Promise<NameEntity> {
  //     return NameEntity.findOne(id);
  // }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.create(dto);
    return createdUser;
  }

  // @Put(':id')
  // updateOne(
  //     @Param('id') id: number,
  //     @Body() dto: NameEntity,
  // ) {
  //     dto.id = id;

  //     return NameEntity.save(dto);
  // }

  // @Delete(':id')
  // async deleteOne(
  //     @Param('id') id: number,
  // ): Promise<NameEntity> {
  //     const dto = await NameEntity.findOne(id);

  //     return NameEntity.remove(dto);
  // }
}
