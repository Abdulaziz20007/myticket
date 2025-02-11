import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./model/customer.model";

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModel: typeof Customer) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerModel.create(createCustomerDto);
  }

  async findCustomerByEmail(email: string): Promise<Customer | null> {
    return this.customerModel.findOne({
      where: { email },
    });
  }

  findAll() {
    return this.customerModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.customerModel.findByPk(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.customerModel.destroy({ where: { id } });
  }
}
