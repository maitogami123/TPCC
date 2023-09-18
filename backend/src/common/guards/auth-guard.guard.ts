import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Type,
  UnauthorizedException,
  mixin,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

export const AuthGuard = (refresh = false): Type<CanActivate> => {
  @Injectable()
  class AuthGuardMixin implements CanActivate {
    constructor(private jwtService: JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const ctx = GqlExecutionContext.create(context);
      const request = ctx.getContext().req;
      const Authorization = request.headers.authorization;
      const token = Authorization?.split(' ')[1];
      const secret = !refresh ? process.env.AT_SECRET : process.env.RT_SECRET;
      if (!token) {
        throw new UnauthorizedException();
      }

      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: secret,
        });
        request['user'] = !refresh
          ? payload
          : {
              ...payload,
              refreshToken: token,
            };
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  }

  const guard = mixin(AuthGuardMixin);
  return guard;
};
