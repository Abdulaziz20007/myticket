import { Column, DataType, Model, Table } from "sequelize-typescript";
interface ICartItemCreationAttr {
  ticket_id: number;
  cart_id: number;
  quantity: number;
}
@Table({ tableName: "cart_item", timestamps: true })
export class CartItem extends Model<CartItem, ICartItemCreationAttr> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataType.INTEGER })
  ticket_id: number;
  @Column({ type: DataType.INTEGER })
  cart_id: number;
  @Column({ type: DataType.INTEGER })
  quantity: number;
}
