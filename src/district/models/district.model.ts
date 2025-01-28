import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Region } from "src/region/models/region.model";
import { Venue } from "src/venue/models/venue.model";

interface IDistrictCreationAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreationAttr> {
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
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
    onUpdate: "Restrict",
  })
  regionId: number;
  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Venue)
  venue: Venue[];
}
