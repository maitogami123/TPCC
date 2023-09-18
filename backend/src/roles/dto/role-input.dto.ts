import { IsAlphanumeric, IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoleInput {
  @IsAlphanumeric()
  @IsNotEmpty()
  @Field()
  name: string;

  @Field()
  description: string;
}
