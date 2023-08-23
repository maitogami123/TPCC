import { Module } from '@nestjs/common';
import { SnackResolver } from './snack.resolver';
import { SnackService } from './snack.service';

@Module({
  providers: [SnackResolver, SnackService]
})
export class SnackModule {}
