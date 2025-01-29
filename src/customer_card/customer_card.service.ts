import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './model/customer_card.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerCardService {
  constructor(@InjectModel(CustomerCard) private customerCardModel: typeof CustomerCard) {}

  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardModel.create(createCustomerCardDto);
  }

  findAll() {
    return this.customerCardModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.customerCardModel.findByPk(id);
  }

  update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return  this.customerCardModel.update(updateCustomerCardDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.customerCardModel.destroy({ where: { id } });
  }
}
