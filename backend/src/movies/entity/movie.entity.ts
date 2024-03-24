import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'Movies' })
@ObjectType()
export class Movie extends BaseEntity {
  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  director: string;

  @Column()
  @Field()
  duration: number;

  @Column()
  @Field({ defaultValue: 0 })
  view_count: number;
}
