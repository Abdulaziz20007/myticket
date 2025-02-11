import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { VenueVenueType } from "../../venue_venue_type/model/venue_venue_type.model";

interface createVenueTypeAttr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, createVenueTypeAttr> {
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

  @BelongsToMany(() => VenueType, () => VenueVenueType)
  venueTypes: VenueType[];
}
