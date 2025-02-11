import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";
import { District } from "../../district/model/district.model";
import { Venue } from "../../venue/model/venue.model";

interface ICreateRegionAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, ICreateRegionAttr> {
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

  @HasMany(() => District)
  district: District[];

  @HasMany(() => Venue)
  venue: Venue[];

  @HasOne(() => CustomerAddress)
  customerAddress: CustomerAddress;
}
