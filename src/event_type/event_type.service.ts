import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './model/event_type.model';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private eventTypeModel: typeof EventType) {}

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeModel.create(createEventTypeDto);
  }

  findAll() {
    return this.eventTypeModel.findAll({ include: { all: true } });

  }

  findOne(id: number) {
    return this.eventTypeModel.findByPk(id);

  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
   return this.eventTypeModel.update(updateEventTypeDto, {
     where: { id },
     returning: true,
   });
  }

  remove(id: number) {
    return this.eventTypeModel.destroy({ where: { id } });
  }
}
