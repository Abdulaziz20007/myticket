import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

interface IEventTypeCreationAttr{
    name:string,
    parentEventTypeId:number
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
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

  // @ForeignKey(() => EventType)
  // @Column({
  //   type: DataType.INTEGER,
  // })
  // parentEventTypeId: number;

  // @BelongsTo(() => EventType, { as: "parentEventType" })
  // parentEventType: EventType;

  // @HasMany(() => EventType, { as: "childEventTypes" })
  // childEventTypes: EventType[];
}
