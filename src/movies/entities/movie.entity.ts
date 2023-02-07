import {
  Column,
  DataType,
  HasOne,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';
import { Authors } from 'src/authors/entities/author.entity';

@Table
export class Movies extends Model<Movies> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Index
  @Index('filterAll')
  @Index('filterTitleRelease')
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  title: string;

  @Index
  @Index('filterAll')
  @Index('filterTitleRelease')
  @Index('filterReleaseGenres')
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  release_date: Date | string;

  @Index
  @Index('filterAll')
  @Index('filterReleaseGenres')
  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  genres: string;

  @HasOne(() => Authors, 'id')
  author: Authors;
}
