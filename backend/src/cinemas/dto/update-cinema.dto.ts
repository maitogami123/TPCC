import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCinemaDto {
  @Field()
  id: number;

  @Field()
  code_name?: string;

  @Field()
  name?: string;

  @Field()
  address?: string;
}
