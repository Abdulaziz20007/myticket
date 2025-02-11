import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Booking } from "../../booking/model/booking.model";
import { CartItem } from "../../cart_item/model/cart_item.model";
import { CartStatus } from "../../cart_status/model/cart_status.model";
import { Customer } from "../../customer/model/customer.model";

interface ICartCreationAttr {
  customerId: number;
  finishedAt: string;
  statusId: number;
}

@Table({ tableName: "cart", timestamps: true })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @Column({
    type: DataType.STRING,
  })
  finishedAt: string;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  customerId: number;

  @BelongsTo(() => Customer)
  region: Customer;

  @ForeignKey(() => CartStatus)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  statusId: number;

  @BelongsTo(() => CartStatus)
  cartStatus: CartStatus;

  @HasMany(() => CartItem)
  cartItems: CartItem[];

  @HasMany(() => Booking)
  bookings: Booking[];
}
