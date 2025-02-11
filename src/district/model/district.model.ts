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
import { CustomerAddress } from "../../customer_address/model/customer_address.model";
import { Region } from "../../region/model/region.model";
import { Venue } from "../../venue/model/venue.model";

interface IDistrictCreateAttr {
  name: string;
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreateAttr> {
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

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  regionId: number;

  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Venue)
  venue: Venue[];

  @HasOne(() => CustomerAddress)
  customerAddress: CustomerAddress;
}
