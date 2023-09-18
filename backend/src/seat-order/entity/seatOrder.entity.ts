import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/order/entity/order.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  order: Order;
}
