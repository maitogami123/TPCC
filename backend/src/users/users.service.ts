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
import { UpdateUserInput } from './type/update-user-input.type';
import { Role } from 'src/roles/entity/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async getUserByUsername(_username: string): Promise<User> {
    if (!_username) {
      throw new BadRequestException();
    }
    try {
      const user = await this.userRepository.findOneOrFail({
        relations: ['role'],
        where: {
          username: _username,
        },
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

  // NOTE: Ternary operator?
  // NOTE: Class transformer ? but can it transform an interface to a class ?
  // HACK: update user info even if the field left blank!
  async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(updateUserData.password, 10);
    const user = await this.userRepository.findOneBy({
      username: updateUserData.username,
    });
    user.email = updateUserData.email;
    user.phone_number = updateUserData.phoneNumber;
    user.hashed_password = hashedPassword;
    const role = await this.roleRepository.findOneBy({
      name: updateUserData.roleName,
    });
    user.role = role;
    return this.userRepository.save(user);
  }

  async logout(username: string): Promise<boolean> {
    await this.userRepository.update(
      {
        username,
      },
      {
        hashed_rt: null,
      },
    );
    return true;
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
