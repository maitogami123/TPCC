import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewSeatDto {
  @Field()
  rows: number;

  @Field()
  columns: number;
}
