import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Type,
  UnauthorizedException,
  mixin,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

// COMMENT: If we do this, we will have to verify the same token 2 times
// TODO: Refactor required
export const RoleGuard = (roleName: string): Type<CanActivate> => {
  @Injectable()
  class RoleGuardMixin implements CanActivate {
    constructor(private jwtService: JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const ctx = GqlExecutionContext.create(context);
      const request = ctx.getContext().req;
      const authorizationHeader = request.headers.authorization;
      const token = authorizationHeader.split(' ')[1];
      if (!token) throw new UnauthorizedException();

      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.AT_SECRET,
        });
        if (payload.role === roleName) {
          return true;
        }
      } catch {
        throw new ForbiddenException();
      }
    }
  }
  const guard = mixin(RoleGuardMixin);
  return guard;
};
