import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from '../../order/entity/order.entity';
import { Snack } from '../../snack/entity/snack.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'SnackOrders' })
@ObjectType()
export class SnackOrder {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  quantity: number;

  @Column({ default: 0 })
  @Field()
  discount: number;

  @ManyToOne((type) => Snack, (snack) => snack.id)
  snack: Snack;

  @ManyToOne((type) => Order, (order) => order.id)
  order: Order;
}
