import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Cart } from "../../cart/model/cart.model";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";
import { CustomerCard } from "../../customer_card/model/customer_card.model";
import { Lang } from "../../lang/models/lang.model";

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: string;
  langId: number;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  birth_date: string;

  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  // @ForeignKey(() => Lang)
  // @Column({
  //   type: DataType.INTEGER,
  //   onDelete: "Restrict",
  // })
  // langId: number;
  // @BelongsTo(() => Lang)
  // lang: Lang;

  // @HasMany(() => CustomerCard)
  // customerCards: CustomerCard[];

  // @HasOne(() => Cart)
  // customerCart: Cart;

  // @HasOne(() => CustomerAddress)
  // customerAddress: CustomerAddress;
}
