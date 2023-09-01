import { Field, InputType } from '@nestjs/graphql';
import { IsAlphanumeric, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class SignInAuthDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @Length(5)
  @Field()
  password: string;
}
