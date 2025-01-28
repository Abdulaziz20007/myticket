import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";
import { VenueVenuetype } from "src/venue_venuetype/models/venue_venuetype.model";

interface IVenueTypeCreationAttr {
  name: string;
}

@Table({ tableName: "venue_type", timestamps: false })
export class VenueType extends Model<VenueType, IVenueTypeCreationAttr> {
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

  @BelongsToMany(() => Venue, () => VenueVenuetype)
  venues: Venue[];
}
