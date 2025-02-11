import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/model/booking.model";

interface createPayMethodAttr {
  name: string;
}

@Table({ tableName: "payment_method" })
export class PaymentMethod extends Model<PaymentMethod, createPayMethodAttr> {
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

  @HasMany(() => Booking)
  bookings: Booking[];
}
