import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entity/movie.entity';
import { Theater } from 'src/theaters/entity/theater.entity';
import { ShowTimeResolver } from './show-time.resolver';
import { ShowTimeService } from './show-time.service';
import { ShowTime } from './entity/showTime.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Theater, Movie, ShowTime]),
    JwtModule.register({}),
  ],
  providers: [ShowTimeService, ShowTimeResolver],
})
export class ShowTimeModule {}
