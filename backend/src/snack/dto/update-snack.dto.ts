import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateSnackDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  discount?: number;
}
