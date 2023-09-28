import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cinema } from 'src/cinemas/entity/cinema.entity';
import { Seat } from 'src/seats/entity/seat.entity';
import { ShowTime } from 'src/show-time/entity/showTime.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Theaters' })
@ObjectType()
export class Theater {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

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

  @DeleteDateColumn({
    type: 'timestamp',
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  @Field({ nullable: true })
  deleted_at: Date;

  @OneToMany((type) => Seat, (seat) => seat.id)
  seats: Seat[];

  @OneToMany((type) => ShowTime, (showTime) => showTime.id)
  showTimes: ShowTime[];

  @ManyToOne((type) => Cinema, (cinema) => cinema.id)
  @Field()
  cinema: Cinema;
}
