import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from './entity/movie.entity';
import { NewMovieDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async createNewMovie(newMovieData: NewMovieDto): Promise<Movie> {
    const newMovie = new Movie();
    Object.keys(newMovieData).forEach((key) => {
      if (newMovieData[key]) {
        newMovie[key] = newMovieData[key];
      }
    });
    return this.movieRepository.save(newMovie);
  }
}
