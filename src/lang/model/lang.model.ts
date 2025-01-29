import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ILangAttr {
  name: string;
}

@Table({ tableName: "lang" })
export class Lang extends Model<Lang, ILangAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
