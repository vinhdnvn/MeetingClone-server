import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { read } from 'fs';
import { map } from 'rxjs/operators';

import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly clientUserService: ClientProxy,
    @Inject('MEETING_SERVICE')
    private readonly clientMeetingService: ClientProxy,
    @Inject('INVITATION_SERVICE')
    private readonly clientInvitationService: ClientProxy,
    @Inject('CHAT_SERVICE') private readonly clientChatService: ClientProxy,
  ) {}

  pingUserService() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.clientUserService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
  }

  getUser() {
    return this.clientUserService.send<string>({ cmd: 'user1-call' }, '');
  }

  pingMeetingService() {
    return this.clientMeetingService.send('ping', '');
  }
  pingInvitationService() {
    return this.clientInvitationService.send('ping', '');
  }
  pingChatService() {
    return this.clientChatService.send('ping', '');
  }

  // leaderCall() {
  //   return this.clientUserService.send('leader-call', '');
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
