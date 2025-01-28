import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { District } from "src/district/models/district.model";
import { Region } from "src/region/models/region.model";
import { VenuePhoto } from "src/venue_photo/models/venue_photo.model";
import { VenueType } from "src/venue_type/models/venue_type.mdel";
import { VenueVenuetype } from "src/venue_venuetype/models/venue_venuetype.model";

interface IVenueCreationAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string[];
  regionId: number;
  districtId: number;
}

@Table({ tableName: "venue", timestamps: true })
export class Venue extends Model<Venue, IVenueCreationAttr> {
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
  @Column({
    type: DataType.STRING,
  })
  address: string;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.STRING,
  })
  site: string;
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  schema: string[];
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => VenuePhoto)
  venuePhoto: VenuePhoto;

  @BelongsToMany(() => VenueType, () => VenueVenuetype)
  venueTypes: VenueType[];
}
