import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from './type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<Tokens> {
    const user = await this.usersService.getUserByUsername(username);
    const { hashed_password, ...result } = user;
    const isMatched = bcrypt.compareSync(password, hashed_password);
    if (!isMatched) {
      throw new UnauthorizedException('Invalid username or password');
    }
    const tokens = await this.getTokens(
      user.username,
      user.email,
      user.role?.name,
    );
    this.usersService.updateRtHash(user.username, tokens.refresh_token);

    return tokens;
  }

  async refresh(username: string, refreshToken: string) {
    const user = await this.usersService.getUserByUsername(username);
    const { hashed_rt, ...result } = user;

    if (!user || !hashed_rt) {
      throw new ForbiddenException('Access denined!');
    }

    const isMatched = bcrypt.compareSync(refreshToken, hashed_rt);

    if (!isMatched) {
      throw new ForbiddenException('Access denined!');
    }

    const tokens = await this.getTokens(
      user.username,
      user.email,
      user.role.name,
    );
    await this.usersService.updateRtHash(user.username, tokens.refresh_token);
    return tokens;
  }

  async logout(username: string): Promise<boolean> {
    return this.usersService.logout(username);
  }

  async getTokens(username: string, email: string, roleName: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: username,
          email,
          roleName,
        },
        {
          secret: process.env.AT_SECRET,
          expiresIn: 60 * 60 * 5,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: username,
          email,
        },
        {
          secret: process.env.RT_SECRET,
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
