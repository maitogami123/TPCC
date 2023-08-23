import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/order/entity/order.entity';
import { Seat } from 'src/seats/entity/seat.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'SeatOrders' })
@ObjectType()
export class SeatOrder {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  price: number;

  @Column({ default: 0 })
  @Field()
  discount: number;

  @ManyToOne(() => Order, (order) => order.id)
  order_id: Order;

  @OneToOne(() => Seat, (seat) => seat.id)
  seat_id: Seat;
}
