import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/model/customer.model";
import { Event } from "../../event/model/event.model";

interface ILangCreationAttr {
  name: string;
}
@Table({ tableName: "lang" })
export class Lang extends Model<Lang, ILangCreationAttr> {
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

  @HasMany(() => Event)
  events: Event[];

  @HasMany(() => Customer)
  customer: Customer[];
}
