import { Module } from '@nestjs/common';
import { CinemasResolver } from './cinemas.resolver';
import { CinemasService } from './cinemas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cinema } from './entity/cinema.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Cinema]), JwtModule.register({})],
  providers: [CinemasResolver, CinemasService],
})
export class CinemasModule {}
