import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITicketStatusAttr {
  name: string;
}

@Table({ tableName: "ticket_status", timestamps: false })
export class TicketStatus extends Model<TicketStatus, ITicketStatusAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING(50),
  })
  name: string;
}
