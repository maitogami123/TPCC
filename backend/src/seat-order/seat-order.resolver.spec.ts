import { Test, TestingModule } from '@nestjs/testing';
import { SeatOrderResolver } from './seat-order.resolver';

describe('SeatOrderResolver', () => {
  let resolver: SeatOrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeatOrderResolver],
    }).compile();

    resolver = module.get<SeatOrderResolver>(SeatOrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
