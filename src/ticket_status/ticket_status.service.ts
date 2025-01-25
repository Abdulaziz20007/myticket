import { Injectable } from "@nestjs/common";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TicketStatus } from "./models/ticket_status.model";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus) private ticketStatus: typeof TicketStatus
  ) {}
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatus.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticketStatus.findAll();
  }

  findOne(id: number) {
    return this.ticketStatus.findByPk(id);
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    const status = await this.ticketStatus.update(updateTicketStatusDto, {
      where: { id },
      returning: true,
    });
    return status[1][0];
  }

  remove(id: number) {
    return this.ticketStatus.destroy({ where: { id } });
  }
}
