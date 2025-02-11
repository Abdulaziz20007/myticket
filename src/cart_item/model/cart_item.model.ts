import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Cart } from "../../cart/model/cart.model";
import { Ticket } from "../../ticket/model/ticket.model";

interface ICartItemCreationAttr {
  ticketId: number;
  cartId: number;
  quantity: number;
}

@Table({ tableName: "cart_item" })
export class CartItem extends Model<CartItem, ICartItemCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  ticketId: number;
  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  cartId: number;
  @BelongsTo(() => Cart)
  cart: Cart;
}
