import { Test, TestingModule } from '@nestjs/testing';
import { SnackResolver } from './snack.resolver';

describe('SnackResolver', () => {
  let resolver: SnackResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnackResolver],
    }).compile();

    resolver = module.get<SnackResolver>(SnackResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
