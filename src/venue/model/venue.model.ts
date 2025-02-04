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
import { District } from "../../district/model/district.model";
import { Event } from "../../event/model/event.model";
import { Region } from "../../region/model/region.model";
import { Seat } from "../../seat/model/seat.model";
import { VenuePhoto } from "../../venue_photo/model/venue_photo.model";
import { VenueType } from "../../venue_type/model/venue_type.model";
import { VenueVenueType } from "../../venue_venue_type/model/venue_venue_type.model";

interface IVenueCreateAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string[];
  regionId: number;
  districtId: number;
}

@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVenueCreateAttr> {
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
    onDelete: "Restrict",
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => VenuePhoto)
  photos: VenuePhoto[];

  @BelongsToMany(() => VenueType, () => VenueVenueType)
  venueTypes: VenueType[];

  @HasMany(() => Event)
  events: Event[];

  @HasMany(() => Seat, { as: "venueSeats" })
  venueSeats: Seat[];
}
