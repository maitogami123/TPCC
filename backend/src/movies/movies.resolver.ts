import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard, RoleGuard } from '../common/guards';
import { NewMovieDto } from './dto';
import { Movie } from './entity/movie.entity';
import { MoviesService } from './movies.service';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Role } from 'src/common/enums';

@Resolver()
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query(() => Movie)
  async getMovieById(@Args('id') id: number) {
    return this.moviesService.getMovie(id);
  }

  @Query(() => [Movie])
  async getAllMovies() {
    return this.moviesService.getAllMovies();
  }

  @UseGuards(AuthGuard(), RoleGuard(Role.ADMIN))
  @Mutation(() => Movie)
  async createMovie(@Args('movieInput') movieInput: NewMovieDto) {
    return this.moviesService.createNewMovie(movieInput);
  }

  @UseGuards(AuthGuard(), RoleGuard(Role.ADMIN))
  @Mutation(() => Movie)
  async updateMovie(@Args('movieInput') movieInput: UpdateMovieDto) {
    return this.moviesService.updateMovie(movieInput);
  }

  @UseGuards(AuthGuard())
  @Mutation(() => Boolean)
  async deleteMovie(@Args('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
