import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Movie } from 'src/movies/entity/movie.entity';
import { Theater } from 'src/theaters/entity/theater.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'ShowTimes' })
@ObjectType()
export class ShowTime extends BaseEntity {
  @Column()
  @Field()
  show_date: Date;

  @ManyToOne((type) => Theater, (theater) => theater.id)
  theater: Theater;

  @ManyToOne((type) => Movie, (movie) => movie.id)
  movie: Movie;
}
