import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/model/ticket.model";

interface createTicketStatusAttr {
  name: string;
}

@Table({ tableName: "ticket_status" })
export class TicketStatus extends Model<TicketStatus, createTicketStatusAttr> {
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

  @HasOne(() => Ticket)
  ticketss: Ticket;
}
