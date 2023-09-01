import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Seat } from 'src/seats/entity/seat.entity';
import { ShowTime } from 'src/show-time/entity/showTime.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Theaters' })
@ObjectType()
export class Theater {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  address: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

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
  deleted_at: Date;

  @OneToMany((type) => Seat, (seat) => seat.id)
  seats: Seat[];

  @OneToMany((type) => ShowTime, (showTime) => showTime.id)
  showTimes: ShowTime[];
}
