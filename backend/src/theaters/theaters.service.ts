import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cinema } from '../cinemas/entity/cinema.entity';
import { Repository } from 'typeorm';
import { Theater } from './entity/theater.entity';
import { Seat } from '../seats/entity/seat.entity';
import { NewTheaterDto } from './dto';

@Injectable()
export class TheatersService {
  constructor(
    @InjectRepository(Theater) private theaterRepository: Repository<Theater>,
    @InjectRepository(Cinema) private cinemaRepository: Repository<Cinema>,
    @InjectRepository(Seat) private seatRepository: Repository<Seat>,
  ) {}

  async getTheaterById(id: number): Promise<Theater> {
    try {
      const theater = this.theaterRepository.findOneOrFail({
        relations: ['cinema', 'seats'],
        where: {
          id: id,
        },
      });
      return theater;
    } catch {
      throw new NotFoundException('Theater not found');
    }
  }

  async createTheater(newTheaterData: NewTheaterDto): Promise<Theater> {
    const newTheater = new Theater();
    newTheater.name = newTheaterData.name;
    newTheater.columns = newTheaterData.columns;
    newTheater.rows = newTheaterData.rows;

    try {
      newTheater.cinema = await this.cinemaRepository.findOneByOrFail({
        code_name: newTheaterData.cinemaCodeName,
      });
    } catch {
      throw new NotFoundException('Cinaema with provided code name not found');
    }
    const createdTheater = await this.theaterRepository.save(newTheater);

    const seats = [];
    for (let i = 0; i < newTheaterData.rows * newTheaterData.columns; i++) {
      const newSeat = new Seat();
      newSeat.theater = createdTheater;
      seats.push(newSeat);
    }

    await this.seatRepository.insert(seats);

    return newTheater;
  }
}
