import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard, RoleGuard } from '../common/guards';
import { NewMovieDto } from './dto';
import { Movie } from './entity/movie.entity';
import { MoviesService } from './movies.service';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Resolver()
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @UseGuards(AuthGuard(), RoleGuard('ADMIN'))
  @Mutation(() => Movie)
  async createMovie(@Args('movieInput') movieInput: NewMovieDto) {
    return this.moviesService.createNewMovie(movieInput);
  }

  @UseGuards(AuthGuard(), RoleGuard('ADMIN'))
  @Mutation(() => Movie)
  async updateMovie(@Args('movieInput') movieInput: UpdateMovieDto) {
    return this.moviesService.updateMovie(movieInput);
  }
}
