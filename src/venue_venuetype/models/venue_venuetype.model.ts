import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";
import { VenueType } from "src/venue_type/models/venue_type.mdel";

interface IVenueVenueType {
  venueId: number;
  venueTypeId: number;
}

@Table({ tableName: "venue_venuetype" })
export class VenueVenuetype extends Model<VenueVenuetype, IVenueVenueType> {
  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venueId: number;

  @ForeignKey(() => VenueType)
  @Column({ type: DataType.INTEGER })
  venueTypeId: number;
}
