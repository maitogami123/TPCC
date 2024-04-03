import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { NewUserInputDto, UpdateUserInputDto } from './dto';
import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards';
import { GetUserAttr } from '../common/decorators';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Mutation((returns) => User)
  createUser(
    @Args('newUserInput') newUserInput: NewUserInputDto,
  ): Promise<User> {
    return this.userService.createUser({
      username: newUserInput.username,
      email: newUserInput.email,
      password: newUserInput.password,
      phoneNumber: newUserInput.phoneNumber,
    });
  }

  // [x]: password confirmation before update user's infomation
  // [x]: add asynchronus valiation to check the rolename is valid or not
  // [x]: update required password and confirm password
  @UseGuards(AuthGuard())
  @Mutation((returns) => User)
  updateUser(
    @Args('UpdateUserInput') updateUserInputDto: UpdateUserInputDto,
    @GetUserAttr('sub') username: string,
  ): Promise<User> {
    if (updateUserInputDto.password !== updateUserInputDto.confirmPassword) {
      throw new UnprocessableEntityException(
        'Password and confirm password must match',
      );
    }
    return this.userService.updateUser({
      email: updateUserInputDto.email,
      password: updateUserInputDto.password,
      phoneNumber: updateUserInputDto.phoneNumber,
      roleName: updateUserInputDto.roleName,
      username: username,
    });
  }
}
