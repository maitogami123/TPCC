import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { Role } from '../roles/entity/role.entity';
import { RolesService } from '../roles/roles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Role]),
    JwtModule.register({}),
  ],
  providers: [UsersService, RolesService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
