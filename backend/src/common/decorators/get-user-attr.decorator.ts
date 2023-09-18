import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * Use to fetch user data attached to request
 */
export const GetUserAttr = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    if (!data) return req.user;
    return req.user[data];
  },
);
