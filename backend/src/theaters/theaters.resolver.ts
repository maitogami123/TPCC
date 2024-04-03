import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TheatersService } from './theaters.service';
import { NewTheaterDto } from './dto';
import { Theater } from './entity/theater.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard, RoleGuard } from '../common/guards';

@Resolver()
export class TheatersResolver {
  constructor(private theaterServices: TheatersService) {}

  @Query(() => Theater)
  getTheaterById(@Args('id') id: number): Promise<Theater> {
    return this.theaterServices.getTheaterById(id);
  }

  @UseGuards(AuthGuard(), RoleGuard('ADMIN'))
  @Mutation(() => Theater)
  createTheater(
    @Args('newTheaterData') newTheaterData: NewTheaterDto,
  ): Promise<Theater> {
    return this.theaterServices.createTheater(newTheaterData);
  }
}
