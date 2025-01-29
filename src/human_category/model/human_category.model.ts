import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "src/event/model/event.model";

interface IHumanCategoryCreationAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: string;
}

@Table({ tableName: "human_category" })
export class HumanCategory extends Model<HumanCategory, IHumanCategoryCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.SMALLINT,
  })
  start_age: number;

  @Column({
    type: DataType.SMALLINT,
  })
  finish_age: number;

  @Column({
    type: DataType.ENUM('MALE', 'FEMALE'),
  })
  gender: string;

  @HasMany(() => Event)
  event: Event[];
}
