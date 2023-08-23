import { Body, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  sayHello(): string {
    return 'Hello World!';
  }
  sayBye(): string {
    return 'This WORK!!!!!';
  }

  async createUser(): Promise<User> {
    return;
  }
}
