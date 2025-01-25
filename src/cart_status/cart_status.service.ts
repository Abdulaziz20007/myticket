import { Injectable } from "@nestjs/common";
import { CreateCartStatusDto } from "./dto/create-cart_status.dto";
import { UpdateCartStatusDto } from "./dto/update-cart_status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CartStatus } from "./models/cart_status.model";

@Injectable()
export class CartStatusService {
  constructor(@InjectModel(CartStatus) private cartStatus: typeof CartStatus) {}
  create(createCartStatusDto: CreateCartStatusDto) {
    return this.cartStatus.create(createCartStatusDto);
  }

  findAll() {
    return this.cartStatus.findAll();
  }

  findOne(id: number) {
    return this.cartStatus.findByPk(id);
  }

  async update(id: number, updateCartStatusDto: UpdateCartStatusDto) {
    const status = await this.cartStatus.update(updateCartStatusDto, {
      where: { id },
      returning: true,
    });
    return status[1][0];
  }

  remove(id: number) {
    return this.cartStatus.destroy({ where: { id } });
  }
}
