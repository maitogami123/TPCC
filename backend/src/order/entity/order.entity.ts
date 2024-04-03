import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { SeatOrder } from '../../seat-order/entity/seatOrder.entity';
import { ShowTime } from '../../show-time/entity/showTime.entity';
import { SnackOrder } from '../../snack-order/entity/snackOrder.entity';
import { User } from '../../users/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Orders' })
@ObjectType()
export class Order implements BaseEntity {
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
