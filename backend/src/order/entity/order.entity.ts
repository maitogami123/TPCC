import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { SeatOrder } from 'src/seat-order/entity/seatOrder.entity';
import { ShowTime } from 'src/show-time/entity/showTime.entity';
import { SnackOrder } from 'src/snack-order/entity/snackOrder.entity';
import { User } from 'src/users/entity/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'Orders' })
@ObjectType()
export class Order extends BaseEntity {
  @Column()
  @Field()
  total: number;

  @Column({ default: false })
  @Field()
  is_cancelled: boolean;

  @ManyToOne((type) => User, (user) => user.orders)
  users: User;

  @OneToOne((type) => ShowTime, (showTime) => showTime.id)
  showTime: ShowTime;

  @OneToMany((type) => SnackOrder, (snackOrder) => snackOrder.id)
  snacks: SnackOrder[];

  @OneToMany((type) => SeatOrder, (seatOrder) => seatOrder.id)
  seats: SeatOrder[];
}
