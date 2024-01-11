import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entity/movie.entity';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), JwtModule.register({})],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
