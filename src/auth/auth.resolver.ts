import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginResponse, SignInAuthDto } from './dto';
import { AuthService } from './auth.service';
import { User } from 'src/users/entity/user.entity';
import { UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { GetUserAttr } from 'src/common/decorators';
import { AuthGuard, RoleGuard } from 'src/common/guards';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Mutation((returns) => LoginResponse)
  async signInLocal(@Args('SignInAuthDto') singInAuthDto: SignInAuthDto) {
    return this.authService.signIn(
      singInAuthDto.username,
      singInAuthDto.password,
    );
  }

  @UseGuards(AuthGuard(true))
  @Mutation((returns) => LoginResponse)
  async refreshSession(
    @GetUserAttr('sub') username: string,
    @GetUserAttr('refreshToken') refreshToken: string,
  ) {
    return this.authService.refresh(username, refreshToken);
  }

  // [x]: return a valid data
  @UseGuards(AuthGuard(), RoleGuard('ADMIN'))
  @Query(() => User)
  getUserProfile(@GetUserAttr('sub') username: string): Promise<User> {
    return this.usersService.getUserByUsername(username);
  }

  @UseGuards(AuthGuard())
  @Mutation(() => Boolean)
  async logout(@GetUserAttr('sub') username: string): Promise<boolean> {
    return this.authService.logout(username);
  }
}
