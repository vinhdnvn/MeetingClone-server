import { Body, Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'create-user' })
  //   create func for create user and handle exception
  async createUser(@Body() userDto: CreateUserDto) {
    // create data for userDto
    try {
      return this.usersService.createUser(userDto);
    } catch (error) {
      return {
        message: 'Create user fail in User Controller',
        error: error.message,
      };
    }
  }
}
