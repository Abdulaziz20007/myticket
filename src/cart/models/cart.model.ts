import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICartCreationAttr {
  customer_id: number;
  createdAt: Date;
  finishedAt: Date;
  status_id: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataType.INTEGER })
  customer_id: number;
  @Column({ type: DataType.DATE })
  createdAt: Date;
  @Column({ type: DataType.DATE })
  finishedAt: Date;
  @Column({ type: DataType.INTEGER })
  status_id: number;
}
