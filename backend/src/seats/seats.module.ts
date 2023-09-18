import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entity/seat.entity';
import { SeatsService } from './seats.service';
import { SeatsResolver } from './seats.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Seat])],
  providers: [SeatsService, SeatsResolver],
})
export class SeatsModule {}
