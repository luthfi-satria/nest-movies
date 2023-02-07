import {
  Column,
  DataType,
  ForeignKey,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';
import { Gender } from 'src/common/entities/constants-var.entity';
import { Movies } from 'src/movies/entities/movie.entity';

@Table
export class Authors extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Index
  @Index('filterAuthorsAll')
  @Column({
    type: DataType.STRING(75),
    allowNull: false,
  })
  name: string;

  @Index
  @Index('filterAuthorsAll')
  @Column({
    type: DataType.CHAR(1),
    allowNull: false,
    defaultValue: Gender.MALE,
  })
  gender: Gender;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthdate: Date | string;
}
