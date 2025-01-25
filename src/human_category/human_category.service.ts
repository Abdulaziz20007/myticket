import { Injectable } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./models/human_category.model";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategory: typeof HumanCategory
  ) {}
  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategory.create(createHumanCategoryDto);
  }

  findAll() {
    return this.humanCategory.findAll();
  }

  findOne(id: number) {
    return this.humanCategory.findByPk(id);
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const human = await this.humanCategory.update(updateHumanCategoryDto, {
      where: { id },
      returning: true,
    });
    return human[1][0];
  }

  remove(id: number) {
    return this.humanCategory.destroy({ where: { id } });
  }
}
