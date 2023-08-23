import { Module } from '@nestjs/common';
import { SnackOrderResolver } from './snack-order.resolver';
import { SnackOrderService } from './snack-order.service';

@Module({
  providers: [SnackOrderResolver, SnackOrderService]
})
export class SnackOrderModule {}
