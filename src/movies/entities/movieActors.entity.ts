import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Actors } from 'src/actors/entities/actor.entity';
import { Movies } from './movie.entity';

@Table
export class MovieActors extends Model<MovieActors> {
  @ForeignKey(() => Movies)
  @Column
  movie_id: number;

  @ForeignKey(() => Actors)
  @Column
  actors_id: number;
}
