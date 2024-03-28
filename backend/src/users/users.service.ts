import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserInput, UserUpdateObject } from './type';
import { UpdateUserInput } from './type';
import { Role } from '../roles/entity/role.entity';
import { hashData } from '../common/utils';

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
    const hashedPassword = await hashData(newUserInput.password);
    const user = new User();
    user.email = newUserInput.email;
    user.username = newUserInput.username;
    user.phone_number = newUserInput.phoneNumber;
    user.hashed_password = hashedPassword;
    return this.userRepository.save(user);
  }

  // [ ]: Re-name variables
  async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    const updateObject: UserUpdateObject = await this.handleBuildUpdateObject(
      updateUserData,
    );
    // [x]: refactor this update query, using js object loop
    // NOTE: If the key is not undefined -> add that to query update query
    await this.userRepository.update(
      {
        username: updateUserData.username,
      },
      updateObject,
    );
    return this.userRepository.findOne({
      relations: ['role'],
      where: { username: updateUserData.username },
    });
  }

  async handleBuildUpdateObject(
    updateUserData: UpdateUserInput,
  ): Promise<UserUpdateObject> {
    const userUpdateObject: UserUpdateObject = {};
    // COMMENT: By this way, I can check the input one more time before make changes to the  curent object
    for (const propertyKey of Object.keys(updateUserData)) {
      if (updateUserData[propertyKey])
        switch (propertyKey) {
          case 'password':
            userUpdateObject.hashed_password = await hashData(
              updateUserData[propertyKey],
            );
            break;
          case 'roleName':
            try {
              const role = await this.roleRepository.findOneByOrFail({
                name: updateUserData.roleName,
              });
              userUpdateObject.role = role;
            } catch {
              throw new NotFoundException(
                `Role ${updateUserData[propertyKey]} not found!`,
              );
            }
            break;
          case 'email':
            userUpdateObject.email = updateUserData.email;
            break;
          case 'phoneNumber':
            userUpdateObject.phone_number = updateUserData.phoneNumber;
            break;
        }
    }
    return userUpdateObject;
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

  async updateRtHash(_username: string, rt: string) {
    const hash = await hashData(rt);
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
