import { Test, TestingModule } from '@nestjs/testing';
import { ShowTimeResolver } from './show-time.resolver';

describe('ShowTimeResolver', () => {
  let resolver: ShowTimeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowTimeResolver],
    }).compile();

    resolver = module.get<ShowTimeResolver>(ShowTimeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
