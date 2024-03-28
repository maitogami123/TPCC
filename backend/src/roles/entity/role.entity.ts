import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'Roles' })
@ObjectType()
export class Role extends BaseEntity {
  @Column({ unique: true })
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field()
  description: string;

  // @OneToMany((type) => User, (user) => user.role)
  // users: User[];
}
