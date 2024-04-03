import { Injectable } from '@nestjs/common';
import { ShowTime } from './entity/showTime.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewShowTimeDTO } from './dto';
import { Theater } from 'src/theaters/entity/theater.entity';
import { Movie } from 'src/movies/entity/movie.entity';

@Injectable()
export class ShowTimeService {
  constructor(
    @InjectRepository(ShowTime)
    private showtimesRepository: Repository<ShowTime>,
    @InjectRepository(Theater) private theatersRepository: Repository<Theater>,
    @InjectRepository(Movie) private moviesRepository: Repository<Movie>,
  ) {}

  async createShowTime(newShowTimeData: NewShowTimeDTO) {
    const theater = await this.theatersRepository.findOneByOrFail({
      id: newShowTimeData.theaterId,
    });

    const movie = await this.moviesRepository.findOneByOrFail({
      id: newShowTimeData.movieId,
    });

    const newShowTime = new ShowTime();
    newShowTime.show_date = newShowTimeData.showDate;
    newShowTime.movie = movie;
    newShowTime.theater = theater;

    return this.showtimesRepository.save(newShowTime);
  }

  async getShowTime(showTimeId: number) {
    return this.showtimesRepository.findOneByOrFail({ id: showTimeId });
  }
}
