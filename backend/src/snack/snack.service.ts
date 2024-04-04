import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Snack } from './entity/snack.entity';
import { Repository } from 'typeorm';
import { NewSnackDto, UpdateSnackDto } from './dto';

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

  async getAllSnacks(): Promise<Snack[]> {
    return this.snackRepository.find();
  }

  async getSnackById(id: number): Promise<Snack> {
    return this.snackRepository.findOneByOrFail({ id: id });
  }

  async updateSnack(
    id: number,
    updateSnackData: UpdateSnackDto,
  ): Promise<Snack> {
    const snack = await this.getSnackById(id);
    Object.keys(updateSnackData).forEach((key) => {
      if (updateSnackData[key]) {
        snack[key] = updateSnackData[key];
      }
    });
    return this.snackRepository.save(snack);
  }
}
