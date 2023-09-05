import { Module } from '@nestjs/common';
import { CinemasResolver } from './cinemas.resolver';
import { CinemasService } from './cinemas.service';

@Module({
  providers: [CinemasResolver, CinemasService]
})
export class CinemasModule {}
