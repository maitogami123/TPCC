import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Movie } from 'src/movies/entity/movie.entity';
import { Theater } from 'src/theaters/entity/theater.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'ShowTimes' })
@ObjectType()
export class ShowTime {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  show_date: Date;

  @Field()
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Field()
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  @Field({ nullable: true })
  deleted_at: Date;

  @ManyToOne((type) => Theater, (theater) => theater.id)
  theater: Theater;

  @ManyToOne((type) => Movie, (movie) => movie.id)
  movie: Movie;
}
