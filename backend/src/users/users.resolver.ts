import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { NewUserInputDto, UpdateUserInputDto } from './dto';
import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards';
import { GetUserAttr } from 'src/common/decorators';
import { RolesService } from 'src/roles/roles.service';

@Resolver()
export class UsersResolver {
  constructor(
    private userService: UsersService,
    private roleService: RolesService,
  ) {}

  // TODO: Delete this later!
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

  // [x]: password confirmation before update user's infomation
  // [x]: add asynchronus valiation to check the rolename is valid or not
  // [ ]: update required password and confirm password
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
    if (!this.roleService.isValidRole(updateUserInputDto.roleName)) {
      throw new UnprocessableEntityException('Invalid role name');
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
