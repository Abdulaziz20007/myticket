import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Cart } from "../../cart/model/cart.model";

interface createCartStatus {
  name: string;
}

@Table({ tableName: "cart_status" })
export class CartStatus extends Model<CartStatus, createCartStatus> {
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

  @HasMany(() => Cart)
  carts: Cart[];
}
