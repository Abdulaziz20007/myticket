import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./models/seat_type.model";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatType: typeof SeatType) {}
  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatType.create(createSeatTypeDto);
  }

  findAll() {
    return this.seatType.findAll();
  }

  findOne(id: number) {
    return this.seatType.findByPk(id);
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seat = await this.seatType.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return seat[1][0];
  }

  remove(id: number) {
    return this.seatType.destroy({ where: { id } });
  }
}
