import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";

interface IVenuePhotoAttr {
  venueId: number;
  url: string;
}

@Table({ tableName: "venue_photo", timestamps: true })
export class VenuePhoto extends Model<VenuePhoto, IVenuePhotoAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;
  @Column({
    type: DataType.STRING,
  })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
