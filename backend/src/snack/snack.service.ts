import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Snack } from './entity/snack.entity';
import { Repository } from 'typeorm';
import { NewSnackDto } from './dto';

@Injectable()
export class SnackService {
  constructor(
    @InjectRepository(Snack) private snackRepository: Repository<Snack>,
  ) {}

  async createSnack(newSnackData: NewSnackDto): Promise<Snack> {
    const newSnack = new Snack();
    newSnack.name = newSnackData.name;
    Object.keys(newSnackData).forEach((key) => {
      if (newSnackData[key]) {
        newSnack[key] = newSnackData[key];
      }
    });
    return this.snackRepository.save(newSnack);
  }
}
