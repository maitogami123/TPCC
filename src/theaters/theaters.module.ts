import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './entity/theater.entity';
import { TheatersService } from './theaters.service';
import { TheatersResolver } from './theaters.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Theater])],
  providers: [TheatersService, TheatersResolver],
})
export class TheatersModule {}
