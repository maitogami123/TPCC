import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { Order } from '../../order/entity/order.entity';
import { Role } from '../../roles/entity/role.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'Users' })
@ObjectType()
export class User extends BaseEntity {
  @Column({ unique: true })
  @Field()
  username: string;

  @Column()
  @Field()
  hashed_password: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ unique: true })
  @Field()
  phone_number: string;

  @Column({ nullable: true })
  @Field()
  hashed_rt?: string;

  @Field({ nullable: true })
  @ManyToOne((type) => Role)
  role: Role;

  @OneToMany((type) => Order, (order) => order.users)
  orders: Order[];
}
