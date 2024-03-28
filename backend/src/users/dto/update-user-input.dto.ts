import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsEmail, Length, ValidateIf } from 'class-validator';
import { Match } from '../../common/decorators';

@InputType()
export class UpdateUserInputDto {
  @Length(5)
  @Field({ nullable: true })
  password: string;

  @Length(5)
  @Match('password')
  @Field({ nullable: true })
  confirmPassword: string;

  @ValidateIf((target) => target.email !== '')
  @IsEmail()
  @Field({ nullable: true })
  email: string;

  @Length(10, 10)
  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  @IsAlpha()
  roleName: string;
}
