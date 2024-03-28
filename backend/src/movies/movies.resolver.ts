import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard, RoleGuard } from '../common/guards';
import { Movie } from './entity/movie.entity';
import { NewMovieDto } from './dto';
import { join } from 'path';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts/dist';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { MoviesService } from './movies.service';

@Resolver()
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @UseGuards(AuthGuard(), RoleGuard('ADMIN'))
  @Mutation(() => Movie)
  async createMovie(
    @Args('movieInput') movieInput: NewMovieDto,
    @Args({ name: 'image', type: () => GraphQLUpload })
    image: FileUpload,
  ) {
    const file = await image;
    const dirPath = join(__dirname, '/uploads');

    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
    file
      .createReadStream()
      .pipe(createWriteStream(`${dirPath}/${file.filename}`))
      .on('finish', () => {
        console.log('IMAGE_CREATED_IN_DIRECTORY');
        return this.moviesService.createNewMovie(movieInput);
      })
      .on('error', (error) => {
        console.log('IMAGE_UPLOAD_ERROR', error);
        return;
      });
  }
}
