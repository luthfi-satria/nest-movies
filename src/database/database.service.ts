import { Sequelize } from 'sequelize-typescript';
import { Actors } from 'src/actors/entities/actor.entity';
import { Authors } from 'src/authors/entities/author.entity';
import { Movies } from 'src/movies/entities/movie.entity';
import { MovieActors } from 'src/movies/entities/movieActors.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const logging = process.env.DB_LOGGING
        ? process.env.DB_LOGGING == 'true'
          ? true
          : false
        : false;

      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: logging,
        models: [Actors, Authors, Movies, MovieActors],
      });
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
