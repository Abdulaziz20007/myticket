import { Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectModel } from "@nestjs/sequelize";
import { District } from "./models/district.model";

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtModel: typeof District) {}

  async create(createDistrictDto: CreateDistrictDto): Promise<District> {
    const newDistrict = await this.districtModel.create(createDistrictDto);
    return newDistrict;
  }

  async findAll(): Promise<District[]> {
    return this.districtModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<District | null> {
    return this.districtModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(
    id: number,
    updateDistrictDto: UpdateDistrictDto
  ): Promise<District | null> {
    const district = await this.districtModel.update(updateDistrictDto, {
      where: { id },
      returning: true,
    });
    console.log(district);
    return district[1][0];
  }

  async remove(id: number): Promise<string> {
    const res = await this.districtModel.destroy({ where: { id } });
    console.log(res);
    if (!res) {
      return `Bunday district topilmadi`;
    }

    return `${id} idlik district o'chirildi`;
  }
}
