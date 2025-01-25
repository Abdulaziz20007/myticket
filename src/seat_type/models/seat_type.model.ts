import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ISeatTypeCreationAttr {
  name: string;
}

@Table({ tableName: "seat_type", timestamps: false })
export class SeatType extends Model<SeatType, ISeatTypeCreationAttr> {
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
}
