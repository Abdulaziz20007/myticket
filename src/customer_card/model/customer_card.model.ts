import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customer/model/customer.model";


interface ICustomerCardCreationAttr{
    customerId:number,
    name:string,
    phone:string,
    number:string,
    year:number,
    month:number,
    is_active:boolean,
    is_main:boolean

}

@Table({ tableName: "customer_card" })
export class CustomerCard extends Model<
  CustomerCard,
  ICustomerCardCreationAttr
> {
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

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  number: string;

  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @Column({
    type: DataType.INTEGER,
  })
  month: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  customerId: number;
  @BelongsTo(() => Customer)
  customer: Customer;
}
