import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cinema } from '../../cinemas/entity/cinema.entity';
import { BaseEntity } from '../../common/entity/base.entity';
import { Seat } from '../../seats/entity/seat.entity';
import { ShowTime } from '../../show-time/entity/showTime.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Theaters' })
@ObjectType()
export class Theater implements BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

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

  @Field()
  @DeleteDateColumn({
    type: 'timestamp',
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  deleted_at: Date;

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
