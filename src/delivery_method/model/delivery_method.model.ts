import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/model/booking.model";

interface createDelivAttr {
  name: string;
}

@Table({ tableName: "delivery_method" })
export class DeliveryMethod extends Model<DeliveryMethod, createDelivAttr> {
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
