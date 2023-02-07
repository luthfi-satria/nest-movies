import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { AuthorsModule } from './authors/authors.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MoviesModule,
    ActorsModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
