import { Module } from '@nestjs/common';
import { SnackResolver } from './snack.resolver';
import { SnackService } from './snack.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snack } from './entity/snack.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Snack]), JwtModule.register({})],
  providers: [SnackResolver, SnackService],
})
export class SnackModule {}
