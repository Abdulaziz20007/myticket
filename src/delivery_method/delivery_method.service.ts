import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './model/delivery_method.model';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod)
    private deliveryMethodModel: typeof DeliveryMethod
  ) {}

  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodModel.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethodModel.findAll();
  }

  findOne(id: number) {
    return this.deliveryMethodModel.findByPk(id);
  }

  update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodModel.update(updateDeliveryMethodDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.deliveryMethodModel.destroy({ where: { id } });

  }

  }