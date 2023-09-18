import { IsAlphanumeric, IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Match } from 'src/common/decorators';

@InputType()
export class NewUserInputDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @Length(5)
  @Field()
  password: string;

  @IsNotEmpty()
  @Length(5)
  @Match('password')
  @Field()
  confirmPassword: string;

  @IsEmail()
  @Field()
  email: string;

  @Length(10, 10)
  @IsNotEmpty()
  @Field()
  phoneNumber: string;
}
