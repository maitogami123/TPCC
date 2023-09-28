import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './entity/theater.entity';
import { TheatersService } from './theaters.service';
import { TheatersResolver } from './theaters.resolver';
import { JwtModule } from '@nestjs/jwt';
import { Cinema } from 'src/cinemas/entity/cinema.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Theater]),
    TypeOrmModule.forFeature([Cinema]),
    JwtModule.register({})
  ],
  providers: [TheatersService, TheatersResolver],
})
export class TheatersModule { }
