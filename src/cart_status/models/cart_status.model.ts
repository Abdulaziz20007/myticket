import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICartStatusCreationAttr {
  name: string;
}

@Table({ tableName: "cart_status", timestamps: false })
export class CartStatus extends Model<CartStatus, ICartStatusCreationAttr> {
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
