import { Module } from '@nestjs/common';
import { SeatOrderService } from './seat-order.service';
import { SeatOrderResolver } from './seat-order.resolver';

@Module({
  providers: [SeatOrderService, SeatOrderResolver]
})
export class SeatOrderModule {}
