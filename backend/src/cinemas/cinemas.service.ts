import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cinema } from './entity/cinema.entity';
import { Repository } from 'typeorm';
import { NewCinema } from './type';
import { UpdateCinemaDto } from './dto';

@Injectable()
export class CinemasService {
  constructor(
    @InjectRepository(Cinema) private cinemaRepository: Repository<Cinema>,
  ) {}

  async getCinemaById(id: number): Promise<Cinema> {
    try {
      return this.cinemaRepository.findOneByOrFail({
        id: id,
      });
    } catch {
      throw new NotFoundException('Cinema with provided id not found');
    }
  }

  async getCinemaByCodeName(codeName: string): Promise<Cinema> {
    try {
      const newCinema = await this.cinemaRepository.findOneByOrFail({
        code_name: codeName,
      });
      return newCinema;
    } catch {
      throw new NotFoundException('Cinema with provided code name not found');
    }
  }

  async createCinema(newCinemaInput: NewCinema): Promise<Cinema> {
    const cinema = new Cinema();
    cinema.code_name = newCinemaInput.codeName;
    cinema.name = newCinemaInput.name;
    cinema.address = newCinemaInput.address;
    try {
      const newCinema = await this.cinemaRepository.save(cinema);
      return newCinema;
    } catch {
      throw new BadRequestException('Duplicate cinema code name');
    }
  }

  async updateCinema(cinemaInput: UpdateCinemaDto) {
    try {
      const cinema = await this.cinemaRepository.findOneByOrFail({
        id: cinemaInput.id,
      });
      Object.keys(cinemaInput).forEach((key) => {
        cinema[key] = cinemaInput[key];
      });
      return this.cinemaRepository.save(cinema);
    } catch {
      throw new NotFoundException('Cinema with provided id not found');
    }
  }

  async deleteCinema(id: number) {
    try {
      await this.cinemaRepository.softDelete({ id: id });
    } catch {
      throw new ConflictException();
    }
    return this.cinemaRepository.findOne({
      where: { id: id },
      withDeleted: true,
    });
  }
}
