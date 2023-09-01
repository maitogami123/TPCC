import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Seat } from 'src/seats/entity/seat.entity';
import { ShowTime } from 'src/show-time/entity/showTime.entity';
import { User } from 'src/users/entity/user.entity';
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
export class Order {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  total: number;

  @Column({ default: false })
  @Field()
  is_cancelled: boolean;

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

  @ManyToOne((type) => User, (user) => user.orders)
  users: User;

  @OneToOne((type) => ShowTime, (showTime) => showTime.id)
  showTime: ShowTime;
}
