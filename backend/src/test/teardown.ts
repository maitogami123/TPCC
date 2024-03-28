import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';

export default async (): Promise<void> => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  // After finish testing - drop the entire test database
  await app.get<DataSource>(DataSource).dropDatabase();

  await app.close();
};
