import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import 'dotenv/config';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { RolesModule } from './roles/roles.module';
import { SeatsModule } from './seats/seats.module';
import { MoviesModule } from './movies/movies.module';
import { TheatersModule } from './theaters/theaters.module';
import { ShowTimeModule } from './show-time/show-time.module';
import { SnackModule } from './snack/snack.module';
import { OrderModule } from './order/order.module';
import { SeatOrderModule } from './seat-order/seat-order.module';
import { SnackOrderModule } from './snack-order/snack-order.module';
import { AuthModule } from './auth/auth.module';
import { CinemasModule } from './cinemas/cinemas.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: 'src/files',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      csrfPrevention: false,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tpcc',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      entities: ['src/**/*.entity{.ts,.js}'], //use this when testing
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    SeatsModule,
    MoviesModule,
    TheatersModule,
    ShowTimeModule,
    SnackModule,
    OrderModule,
    SeatOrderModule,
    SnackOrderModule,
    AuthModule,
    CinemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
