import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { NewUserInputDto, UpdateUserInputDto } from './dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards';
import { GetUserAttr } from 'src/common/decorators';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @UseGuards(AuthGuard())
  @Query(() => User)
  getUserByUsername(@Args('username') username: string): Promise<User> {
    return this.userService.getUserByUsername(username);
  }

  @Mutation((returns) => User)
  createUser(
    @Args('NewUserInput') newUserInput: NewUserInputDto,
  ): Promise<User> {
    return this.userService.createUser({
      username: newUserInput.username,
      email: newUserInput.email,
      password: newUserInput.password,
      phoneNumber: newUserInput.phoneNumber,
    });
  }

  // TODO: password confirmation before update user's infomation
  @UseGuards(AuthGuard())
  @Mutation((returns) => User)
  updateUser(
    @Args('UpdateUserInput') updateUserInputDto: UpdateUserInputDto,
    @GetUserAttr('sub') username: string,
  ): Promise<User> {
    return this.userService.updateUser({
      email: updateUserInputDto.email,
      password: updateUserInputDto.password,
      phoneNumber: updateUserInputDto.phoneNumber,
      roleName: updateUserInputDto.roleName,
      username: username,
    });
  }
}
