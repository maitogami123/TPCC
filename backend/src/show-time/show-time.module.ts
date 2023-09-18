import { Module } from '@nestjs/common';
import { ShowTimeService } from './show-time.service';
import { ShowTimeResolver } from './show-time.resolver';

@Module({
  providers: [ShowTimeService, ShowTimeResolver]
})
export class ShowTimeModule {}
