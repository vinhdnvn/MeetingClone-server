import { Body, Injectable } from '@nestjs/common';
// import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    // const newUser = this.usersRepository.create(user);
    try {
      return {
        message: 'Create user success',
        data: await this.usersRepository.save(user),
      };
    } catch (error) {
      throw new Error(`Create user fail: ${error.message}`);
    }
  }
}
