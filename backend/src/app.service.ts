import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { Role } from './common/enums';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private userService: UsersService) {}

  async onApplicationBootstrap() {
    try {
      await this.userService.getUserByUsername('testuser');
    } catch {
      this.userService.createUser({
        username: 'testuser',
        password: 'testuser',
        email: 'test_user@example.com',
        phoneNumber: '0908227019',
      });
    }
    try {
      await this.userService.getUserByUsername('testadmin');
    } catch {
      this.userService.createUser({
        username: 'testadmin',
        password: 'testadmin',
        email: 'test_admin@example.com',
        phoneNumber: '0908227020',
        role: Role.ADMIN,
      });
    }
    try {
      await this.userService.getUserByUsername('testmanager');
    } catch {
      this.userService.createUser({
        username: 'testmanager',
        password: 'testmanager',
        email: 'test_manager@example.com',
        phoneNumber: '0908227021',
        role: Role.MANAGER,
      });
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
}
