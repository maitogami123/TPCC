import { Field, ObjectType } from '@nestjs/graphql';
import { Cinema } from 'src/cinemas/entity/cinema.entity';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Seat } from 'src/seats/entity/seat.entity';
import { ShowTime } from 'src/show-time/entity/showTime.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'Theaters' })
@ObjectType()
export class Theater extends BaseEntity {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  rows: number;

  @Column()
  @Field()
  columns: number;

  @OneToMany((type) => Seat, (seat) => seat.theater)
  @Field((type) => [Seat])
  seats: Seat[];

  @OneToMany((type) => ShowTime, (showTime) => showTime.id)
  showTimes: ShowTime[];

  @ManyToOne((type) => Cinema, (cinema) => cinema.id)
  @Field()
  cinema: Cinema;
}
