import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'Snacks' })
@ObjectType()
export class Snack extends BaseEntity {
  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field()
  description: string;

  @Column()
  @Field()
  price: number;

  @Column({ default: 0 })
  @Field()
  discount: number;
}
