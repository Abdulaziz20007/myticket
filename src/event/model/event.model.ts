import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { EventType } from "src/event_type/model/event_type.model";
import { HumanCategory } from "src/human_category/models/human_category.model";
import { Lang } from "src/lang/models/lang.model";
import { Ticket } from "src/ticket/model/ticket.model";
import { Venue } from "src/venue/model/venue.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  eventTypeId: number;
  humanCategoryId: number;
  venueId: number;
  langId: number;
  release_date: string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
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
  photo: string;

  @Column({
    type: DataType.STRING,
  })
  start_date: string;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @Column({
    type: DataType.STRING,
  })
  finish_date: string;

  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @Column({
    type: DataType.STRING,
  })
  release_date: string;

  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  eventTypeId: number;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  humanCategoryId: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  venueId: number;

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  langId: number;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
