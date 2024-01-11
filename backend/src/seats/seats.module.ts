import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entity/seat.entity';
import { SeatsService } from './seats.service';
import { SeatsResolver } from './seats.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Seat]), JwtModule.register({})],
  providers: [SeatsService, SeatsResolver],
})
export class SeatsModule {}
