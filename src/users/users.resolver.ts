import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => String)
  sayHello(): string {
    console.log('Man setup hot reload is hard af');
    return this.userService.sayHello();
  }

  @Query(() => String)
  sayBye(): string {
    return this.userService.sayBye();
  }
}
