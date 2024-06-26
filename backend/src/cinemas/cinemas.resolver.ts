import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CinemasService } from './cinemas.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard, RoleGuard } from '../common/guards';
import { Cinema } from './entity/cinema.entity';
import { NewCinemaDto, UpdateCinemaDto } from './dto';
import { Role } from 'src/common/enums';

@Resolver()
export class CinemasResolver {
  constructor(private cinemaService: CinemasService) {}

  @UseGuards(AuthGuard())
  @Query(() => Cinema)
  getCinemaById(@Args('id') id: number): Promise<Cinema> {
    return this.cinemaService.getCinemaById(id);
  }

  @UseGuards(AuthGuard())
  @Query(() => Cinema)
  getCinemaByCodeName(@Args('codeName') codeName: string): Promise<Cinema> {
    return this.cinemaService.getCinemaByCodeName(codeName);
  }

  @UseGuards(AuthGuard(), RoleGuard(Role.ADMIN))
  @Mutation(() => Cinema)
  createCinema(@Args('cinemaInput') cinemaInput: NewCinemaDto) {
    return this.cinemaService.createCinema(cinemaInput);
  }

  // [x]: update cinema
  @UseGuards(AuthGuard(), RoleGuard(Role.ADMIN))
  @Mutation(() => Cinema)
  updateCinema(@Args('cinemaInput') cinemaInput: UpdateCinemaDto) {
    return this.cinemaService.updateCinema(cinemaInput);
  }

  // [x]: delete cinema
  @UseGuards(AuthGuard(), RoleGuard(Role.ADMIN))
  @Mutation(() => Cinema)
  deleteCinema(@Args('id') id: number) {
    return this.cinemaService.deleteCinema(id);
  }
}
