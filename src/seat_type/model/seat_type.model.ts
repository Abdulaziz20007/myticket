import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Seat } from "src/seat/model/seat.model";

interface createSeatAttr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, createSeatAttr> {
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

  // @HasMany(() => Seat)
  // seat: Seat[];
}
