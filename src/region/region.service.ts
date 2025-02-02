import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './model/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionmodel: typeof Region) {}

  create(createRegionDto: CreateRegionDto) {
    return this.regionmodel.create(createRegionDto);
  }

  findAll() {
    return this.regionmodel.findAll({include:{all:true}});
  }

 async findOne(id: number) {
   const findRegion = await this.regionmodel.findByPk(id);
   return findRegion;
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionmodel.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.regionmodel.destroy({ where: { id } });
  }
}
