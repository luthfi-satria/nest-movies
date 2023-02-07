import { Column, DataType, Index, Model, Table } from 'sequelize-typescript';
import { Gender } from 'src/common/entities/constants-var.entity';

@Table
export class Actors extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Index
  @Index('filterActorsAll')
  @Column({
    type: DataType.STRING(75),
    allowNull: false,
  })
  name: string;

  @Index('filterActorsAll')
  @Index
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
