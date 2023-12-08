import { IsAlpha, IsEmail, Length, ValidateIf } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Match } from 'src/common/decorators';

@InputType()
export class UpdateUserInputDto {
  @ValidateIf((target) => target.password !== undefined)
  @Length(5)
  @Field({ nullable: true })
  password: string;

  @ValidateIf((target) => target.confirmPassword !== undefined)
  @Length(5)
  @Match('password')
  @Field({ nullable: true })
  confirmPassword: string;

  @ValidateIf((target) => target.email !== undefined)
  @IsEmail()
  @Field({ nullable: true })
  email: string;

  @ValidateIf((target) => target.email !== undefined)
  @Length(10, 10)
  @Field({ nullable: true })
  phoneNumber: string;

  @ValidateIf((target) => target.email !== undefined)
  @IsAlpha()
  @Field({ nullable: true })
  roleName: string;
}
