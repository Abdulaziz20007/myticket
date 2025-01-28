import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBookingCreationAttr {
  cart_id: string;
  createdAt: Date;
  finishedAt: Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: string;
  status_id: number;
}

@Table({ tableName: "booking", timestamps: true })
export class Booking extends Model<Booking, IBookingCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  cart_id: string;

  @Column({ type: DataType.DATE })
  createdAt: Date;

  @Column({ type: DataType.DATE })
  finishedAt: Date;

  @Column({ type: DataType.INTEGER })
  payment_method_id: number;

  @Column({ type: DataType.INTEGER })
  delivery_method_id: number;

  @Column({ type: DataType.STRING })
  discount_coupon_id: string;

  @Column({ type: DataType.INTEGER })
  status_id: number;
}
