import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewShowTimeDTO } from './dto';
import { ShowTimeService } from './show-time.service';
import { ShowTime } from './entity/showTime.entity';

@Resolver()
export class ShowTimeResolver {
  constructor(private showTimeServices: ShowTimeService) {}

  @Mutation(() => ShowTime)
  async createShowTime(
    @Args('newShowtimeData') newShowtimeData: NewShowTimeDTO,
  ): Promise<ShowTime> {
    return this.showTimeServices.createShowTime(newShowtimeData);
  }

  @Query(() => ShowTime)
  async getShowTimeById(
    @Args('showtimeId') showtimeId: number,
  ): Promise<ShowTime> {
    return this.showTimeServices.getShowTime(showtimeId);
  }
}
