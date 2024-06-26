import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginResponse, SignInAuthDto } from './dto';
import { AuthService } from './auth.service';
import { User } from '../users/entity/user.entity';
import { UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { GetUserAttr } from '../common/decorators';
import { AuthGuard, RoleGuard } from '../common/guards';
import { Role } from 'src/common/enums';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => LoginResponse)
  async signInLocal(@Args('SignInAuthDto') singInAuthDto: SignInAuthDto) {
    return this.authService.signIn(
      singInAuthDto.username,
      singInAuthDto.password,
    );
  }

  @UseGuards(AuthGuard(true))
  @Mutation(() => LoginResponse)
  async refreshSession(
    @GetUserAttr('sub') username: string,
    @GetUserAttr('refreshToken') refreshToken: string,
  ) {
    return this.authService.refresh(username, refreshToken);
  }

  // [x]: return a valid data
  @UseGuards(AuthGuard(), RoleGuard(Role.ADMIN))
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
