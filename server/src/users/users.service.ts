import { Body, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_SERVICE') private readonly clientUserService: ClientProxy,
  ) {}

  leaderCall() {
    return this.clientUserService.send('leader-call', '');
  }

  async create() {
    return this.clientUserService.send({ cmd: 'create-user' }, '');
  }
}
