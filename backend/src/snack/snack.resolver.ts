import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Snack } from './entity/snack.entity';
import { NewSnackDto } from './dto';
import { SnackService } from './snack.service';

@Resolver()
export class SnackResolver {
  constructor(private snackService: SnackService) {}

  @Mutation(() => Snack)
  createSnack(@Args('newSnackData') newSnackData: NewSnackDto): Promise<Snack> {
    return this.snackService.createSnack(newSnackData);
  }
}
