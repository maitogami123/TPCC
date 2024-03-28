import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'Cinemas' })
@ObjectType()
export class Cinema extends BaseEntity {
  @Column({ unique: true })
  @Field()
  code_name: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  address: string;
}
