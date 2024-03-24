import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { SeatType } from 'src/common/enums';
import { SeatOrder } from 'src/seat-order/entity/seatOrder.entity';
import { Theater } from 'src/theaters/entity/theater.entity';
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
