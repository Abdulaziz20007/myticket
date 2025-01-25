import { Injectable } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { InjectModel } from "@nestjs/sequelize";
import { PaymentMethod } from "./models/payment_method.model";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod) private paymentMethod: typeof PaymentMethod
  ) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethod.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentMethod.findAll();
  }

  findOne(id: number) {
    return this.paymentMethod.findByPk(id);
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const method = await this.paymentMethod.update(updatePaymentMethodDto, {
      where: { id },
      returning: true,
    });
    return method[1][0];
  }

  remove(id: number) {
    return this.paymentMethod.destroy({ where: { id } });
  }
}
