import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { TicketStatus } from './model/ticket_status.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TicketStatusService {
  constructor(@InjectModel(TicketStatus) private ticketStatusModel: typeof TicketStatus){}
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusModel.create(createTicketStatusDto)
  }

  findAll() {
    return this.ticketStatusModel.findAll()
  }

  findOne(id: number) {
    return this.ticketStatusModel.findByPk(id)
  }

  update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusModel.update(updateTicketStatusDto,{where:{id},returning:true})
  }

  remove(id: number) {
    return this.ticketStatusModel.destroy({where:{id}})
  }
}
