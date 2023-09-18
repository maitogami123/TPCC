import { Test, TestingModule } from '@nestjs/testing';
import { CinemasResolver } from './cinemas.resolver';

describe('CinemasResolver', () => {
  let resolver: CinemasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CinemasResolver],
    }).compile();

    resolver = module.get<CinemasResolver>(CinemasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
