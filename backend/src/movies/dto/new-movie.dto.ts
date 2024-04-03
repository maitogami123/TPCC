import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class NewMovieDto {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  director: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
