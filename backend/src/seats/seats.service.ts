import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from './entity/seat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeatsService {
    constructor(
        @InjectRepository(Seat) private seatsRepository: Repository<Seat>
    ) {}


    // NOTE: When render seats, query for cinema then get all the seats and render it by index, id is not indexes relevant.

    // [ ]: Create seats by rows x column as a base then disable unwanted seats
    
    // [ ]: Change seat to VIP seat by select and active that attr or select multiple and active them at the same time

}
