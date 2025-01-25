import { Injectable } from "@nestjs/common";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import { InjectModel } from "@nestjs/sequelize";
import { DeliveryMethod } from "./models/delivery_method.model";

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod) private deliveryMethod: typeof DeliveryMethod
  ) {}
  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethod.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethod.findAll();
  }

  findOne(id: number) {
    return this.deliveryMethod.findByPk(id);
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    const method = await this.deliveryMethod.update(updateDeliveryMethodDto, {
      where: { id },
      returning: true,
    });
    return method[1][0];
  }

  remove(id: number) {
    return this.deliveryMethod.destroy({ where: { id } });
  }
}
