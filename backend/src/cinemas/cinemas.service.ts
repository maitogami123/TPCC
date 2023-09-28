import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cinema } from './entity/cinema.entity';
import { Repository } from 'typeorm';
import { NewCinema } from './type';

@Injectable()
export class CinemasService {
    constructor(
        @InjectRepository(Cinema) private cinemaRepository: Repository<Cinema>
    ) {}

    async getCinemaById(id: number): Promise<Cinema> {
        try {
            return this.cinemaRepository.findOneByOrFail({
                id: id
            })
        } catch {
            throw new NotFoundException('Cinema with provided id not found');
        } 
    }

    async getCinemaByCodeName(codeName: string): Promise<Cinema> {
        try {
            const newCinema = await this.cinemaRepository.findOneByOrFail({
                code_name: codeName
            })
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
            return newCinema
        } catch {
            throw new BadRequestException("Duplicate cinema code name")
        }
    }

    // [ ]: Update Cinema
    // [ ]: Delete Cinema
}
