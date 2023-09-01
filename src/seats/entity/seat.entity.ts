import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SeatOrder } from 'src/seat-order/entity/seatOrder.entity';
import { Theater } from 'src/theaters/entity/theater.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Seats' })
@ObjectType()
export class Seat {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ default: true })
  @Field()
  is_available: boolean;

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

  @ManyToOne((type) => Theater, (theater) => theater.id)
  theater: Theater;

  @OneToOne((type) => SeatOrder, (seatOrder) => seatOrder.id)
  seat: SeatOrder;
}
