import { Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
import { Role } from 'src/common/enums';
import { Match } from '../../common/decorators';

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

  @Field({ nullable: true, defaultValue: Role.USER })
  @IsEnum(Role)
  role?: string;
}
