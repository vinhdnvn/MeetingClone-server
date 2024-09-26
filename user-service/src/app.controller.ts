import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @MessagePattern({ cmd: 'ping' })
  // ping(_: any) {
  //   return of('pong');
  // }

  @MessagePattern({ cmd: 'ping' })
  getHello(): any {
    return {
      name: 'John Doe',
      age: 25,
    };
  }

  @MessagePattern('leader-call')
  getLeader(data: any): any {
    return {
      message: 'Xin loi leader dang ban di danh nhan vien khac !!!!',
    };
  }

  @MessagePattern({ cmd: 'user1-call' })
  getIn4(data: any): any {
    console.log('data', data);
    return {
      name: 'Vinh Nguyeh',
      age: 21,
    };
  }
}
