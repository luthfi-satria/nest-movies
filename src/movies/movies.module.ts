import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Movies } from './entities/movie.entity';
import { MovieActors } from './entities/movieActors.entity';

@Module({
  imports: [Movies, MovieActors],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
