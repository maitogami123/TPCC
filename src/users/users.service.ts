import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserInput } from './type';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUserByUsername(_username: string): Promise<User> {
    if (!_username) {
      throw new BadRequestException();
    }
    try {
      const user = await this.userRepository.findOneByOrFail({
        username: _username,
      });
      return user;
    } catch {
      throw new NotFoundException('User not found!');
    }
  }

  async createUser(newUserInput: NewUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(newUserInput.password, 10);

    const user = new User();
    user.email = newUserInput.email;
    user.username = newUserInput.username;
    user.phone_number = newUserInput.phoneNumber;
    user.hashed_password = hashedPassword;
    return this.userRepository.save(user);
  }

  private hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async updateRtHash(_username: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.userRepository.update(
      {
        username: _username,
      },
      {
        hashed_rt: hash,
      },
    );
  }
}
