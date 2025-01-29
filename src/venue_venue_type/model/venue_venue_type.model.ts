import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/model/venue.model";
import { VenueType } from "src/venue_type/model/venue_type.model";

interface IVenueVenueTypeAttr {
  venueId: number;
  venueTypeId: number;
}

@Table({ tableName: "venue_venue_type" })
export class VenueVenueType extends Model<VenueVenueType, IVenueVenueTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
  })
  venueTypeId: number;
}
