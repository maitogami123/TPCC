import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { SeatType } from '../../common/enums';
import { SeatOrder } from '../../seat-order/entity/seatOrder.entity';
import { Theater } from '../../theaters/entity/theater.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity({ name: 'Seats' })
@ObjectType()
export class Seat extends BaseEntity {
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
