import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './entity/theater.entity';
import { TheatersService } from './theaters.service';
import { TheatersResolver } from './theaters.resolver';
import { JwtModule } from '@nestjs/jwt';
import { Cinema } from '../cinemas/entity/cinema.entity';
import { Seat } from '../seats/entity/seat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Theater, Cinema, Seat]),
    JwtModule.register({}),
  ],
  providers: [TheatersService, TheatersResolver],
})
export class TheatersModule {}
