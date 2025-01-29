import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './model/seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypemodel:typeof SeatType){}
  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypemodel.create(createSeatTypeDto)
  }

  findAll() {
    return this.seatTypemodel.findAll({ include: { all: true } });
  }

 async findOne(id: number) {
    const findUser = await this.seatTypemodel.findByPk(id)
    return findUser
  }

  update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypemodel.update(updateSeatTypeDto,{where:{id}, returning:true})
  }

  remove(id: number) {
    return this.seatTypemodel.destroy({where:{id}})
  }
}
