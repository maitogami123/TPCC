import { IsAlpha, IsEmail, Length, ValidateIf } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Match } from 'src/common/decorators';

@InputType()
export class UpdateUserInputDto {
  @Length(5)
  @Field()
  password: string;

  @Length(5)
  @Match('password')
  @Field()
  confirmPassword: string;

  @ValidateIf((target) => target.email !== '')
  @IsEmail()
  @Field()
  email: string;

  @Length(10, 10)
  @Field()
  phoneNumber: string;

  @Field()
  @IsAlpha()
  // TODO: add asynchronus valiation to check the rolename is valid or not
  roleName: string;
}
