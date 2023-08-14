import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => String)
  sayHello(): string {
    return this.userService.sayHello();
  }

  @Query(() => String)
  sayBye(): string {
    return this.userService.sayHello();
  }
}
