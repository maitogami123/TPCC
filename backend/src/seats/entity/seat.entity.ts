import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { SeatType } from '../../common/enums';
import { SeatOrder } from '../../seat-order/entity/seatOrder.entity';
import { Theater } from '../../theaters/entity/theater.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Seats' })
@ObjectType()
export class Seat implements BaseEntity {
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

  @Column({ default: SeatType.NORMAL })
  @Field()
  type: SeatType;

  @Column()
  @Field()
  row: number;

  @Column()
  @Field()
  column: number;

  @ManyToOne((type) => Theater, (theater) => theater.seats)
  theater: Theater;

  @OneToOne(() => SeatOrder)
  @JoinColumn()
  seat_order: SeatOrder;
}
