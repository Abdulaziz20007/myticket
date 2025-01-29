import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Venue } from "src/venue/model/venue.model";


interface IVenuePhotoCreationAttr{
    url:string
    venueId:number
}

@Table({ tableName: "venue_photo" })
export class VenuePhoto extends Model<VenuePhoto, IVenuePhotoCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  url: string;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  venueId: number;
}
