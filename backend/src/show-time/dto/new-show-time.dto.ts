import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewShowTimeDTO {
  @Field()
  showDate: Date;

  @Field()
  theaterId: number;

  @Field()
  movieId: number;
}
