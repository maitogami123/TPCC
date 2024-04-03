import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateMovieDto {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  director: string;

  @Field({ nullable: true })
  duration: number;
}
