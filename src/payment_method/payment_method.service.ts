import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './model/payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(@InjectModel(PaymentMethod) private paytmentMethodModel:typeof PaymentMethod){}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paytmentMethodModel.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paytmentMethodModel.findAll();
  }

  findOne(id: number) {
    return this.paytmentMethodModel.findByPk(id);
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paytmentMethodModel.update(updatePaymentMethodDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.paytmentMethodModel.destroy({ where: { id } });
  }
}
