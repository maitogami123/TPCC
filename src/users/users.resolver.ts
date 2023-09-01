import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { NewUserInputDto } from './dto';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

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
}
