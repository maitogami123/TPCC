import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Theater } from './entity/theater.entity';
import { Repository } from 'typeorm';
import { NewCinema } from 'src/cinemas/type';
import { Cinema } from 'src/cinemas/entity/cinema.entity';
import { NewTheater } from './type';

@Injectable()
export class TheatersService {
    constructor(
        @InjectRepository(Theater) private theaterRepository: Repository<Theater>,
        @InjectRepository(Cinema) private cinemaRepository: Repository<Cinema>
    ) { }

    async getTheaterById(id: number): Promise<Theater> {
        try {
            const theater = this.theaterRepository.findOneOrFail({
                relations: ["cinema"],
                where: {
                    id: id
                }
            })
            return theater;
        } catch {
            throw new NotFoundException("Theater not found")
        }
    }

    async createTheater(newTheaterData: NewTheater): Promise<Theater> {
        const newTheater = new Theater()
        newTheater.name = newTheaterData.name;
        try {
            newTheater.cinema = await this.cinemaRepository.findOneByOrFail({
                code_name: newTheaterData.cinemaCodeName
            })
        } catch {
            throw new NotFoundException("Cinama with provided code name not found");
        }
        return this.theaterRepository.save(newTheater);
    }

}
