import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  sayHello(): string {
    return 'Hello World!';
  }
  sayBye(): string {
    return 'This WORK!!!!!';
  }
}
