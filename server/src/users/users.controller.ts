import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateBookDto } from './dto/create-book.dto';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @Post()
  createBook() {}
}
