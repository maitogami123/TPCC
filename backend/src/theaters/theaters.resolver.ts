import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TheatersService } from './theaters.service';
import { NewTheaterDto } from './dto';
import { Theater } from './entity/theater.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard, RoleGuard } from 'src/common/guards';

@Resolver()
export class TheatersResolver {
    constructor(
        private theaterService: TheatersService
    ) { }

    @Query(() => Theater)
    getTheaterById(@Args('id') id: number): Promise<Theater> {
        return this.theaterService.getTheaterById(id);
    }

    @UseGuards(AuthGuard(), RoleGuard('ADMIN'))
    @Mutation(() => Theater)
    createTheater(@Args('newTheaterData') newTheaterData: NewTheaterDto): Promise<Theater> {
        return this.theaterService.createTheater(newTheaterData);
    }
}
