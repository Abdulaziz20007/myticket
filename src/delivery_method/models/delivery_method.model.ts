import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDeliveryMethodCreatinfAttr {
  name: string;
}

@Table({ tableName: "delivery_method", timestamps: false })
export class DeliveryMethod extends Model<
  DeliveryMethod,
  IDeliveryMethodCreatinfAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
