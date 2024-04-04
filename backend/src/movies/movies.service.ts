import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from './entity/movie.entity';
import { NewMovieDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  getAllMovies() {
    return this.movieRepository.find();
  }

  getMovie(movieId: number): Promise<Movie> {
    return this.movieRepository.findOneByOrFail({ id: movieId });
  }

  createNewMovie(newMovieData: NewMovieDto): Promise<Movie> {
    const newMovie = new Movie();
    Object.keys(newMovieData).forEach((key) => {
      if (key in newMovieData) {
        newMovie[key] = newMovieData[key];
      }
    });
    return this.movieRepository.save(newMovie);
  }

  async updateMovie(updateMovieData: UpdateMovieDto): Promise<Movie> {
    const movie = await this.movieRepository.findOneByOrFail({
      id: updateMovieData.id,
    });

    movie.title = updateMovieData.title;
    movie.director = updateMovieData.director;
    movie.duration = updateMovieData.duration;

    return this.movieRepository.save(movie);
  }

  async deleteMovie(movieId: number) {
    try {
      await this.movieRepository.softDelete({ id: movieId });
    } catch {
      throw new ConflictException();
    }
    return true;
  }
}
