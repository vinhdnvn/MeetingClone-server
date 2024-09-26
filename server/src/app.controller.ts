import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { zip } from 'rxjs';
import { map } from 'rxjs';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/user.dto';
import { ClientProxy } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
    @Inject('USER_SERVICE') private readonly clientUserService: ClientProxy,
  ) {}

  // @Get()
  // async getUsers(): Promise<string> {
  //   return await this.appService.getUsers();
  // }

  @Get('/ping-user')
  pingUserService() {
    return this.appService.pingUserService();
  }
  @Get('/user1')
  getUser() {
    return this.appService.getUser();
  }

  @Get('/leadercall')
  leaderCall() {
    return this.userService.leaderCall();
  }

  @Get('/ping-meeting')
  pingMeetingService() {
    return this.appService.pingMeetingService();
  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('/create-user')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.clientUserService.send({ cmd: 'create-user' }, createUserDto);
  }
}
