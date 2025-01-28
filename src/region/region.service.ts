import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Region } from "./models/region.model";

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionModel: typeof Region) {}

  async create(createRegionDto: CreateRegionDto): Promise<Region> {
    const newRegion = await this.regionModel.create(createRegionDto);
    return newRegion;
  }

  async findAll(): Promise<Region[]> {
    return this.regionModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Region | null> {
    return this.regionModel.findOne({ where: { id }, include: { all: true } });
  }

  async update(
    id: number,
    updateRegionDto: UpdateRegionDto
  ): Promise<Region | null> {
    const region = await this.regionModel.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    console.log(region);
    return region[1][0];
  }

  async remove(id: number): Promise<string> {
    const res = await this.regionModel.destroy({ where: { id } });
    console.log(res);
    if (!res) {
      return `Bunday region topilmadi`;
    }

    return `${id} idlik region o'chirildi`;
  }
}
