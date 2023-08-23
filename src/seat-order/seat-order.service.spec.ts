import { Test, TestingModule } from '@nestjs/testing';
import { SeatOrderService } from './seat-order.service';

describe('SeatOrderService', () => {
  let service: SeatOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeatOrderService],
    }).compile();

    service = module.get<SeatOrderService>(SeatOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
