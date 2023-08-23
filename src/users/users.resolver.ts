import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { NewUserInputDto } from './dto';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => String)
  sayHello(): string {
    return this.userService.sayHello();
  }

  @Query(() => String)
  sayBye(): string {
    return this.userService.sayBye();
  }

  @Mutation((returns) => User)
  createUser(
    @Args('NewUserInput') newUserInput: NewUserInputDto,
  ): Promise<User> {
    return;
  }
}
