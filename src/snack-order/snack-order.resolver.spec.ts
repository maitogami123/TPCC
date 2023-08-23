import { Test, TestingModule } from '@nestjs/testing';
import { SnackOrderResolver } from './snack-order.resolver';

describe('SnackOrderResolver', () => {
  let resolver: SnackOrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnackOrderResolver],
    }).compile();

    resolver = module.get<SnackOrderResolver>(SnackOrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
