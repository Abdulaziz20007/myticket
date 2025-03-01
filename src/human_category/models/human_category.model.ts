import { Model, Table,Column,DataType } from "sequelize-typescript";

interface IHumanCategoryCreationAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender:string
}
@Table({ tableName: "human_category", timestamps: false })
export class HumanCategory extends Model<
  HumanCategory,
  IHumanCategoryCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;
  
  @Column({
    type: DataType.INTEGER,
  })
  start_age: number;

  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;

  @Column({
    type: DataType.STRING(50),
  })
  gender: string;
}
