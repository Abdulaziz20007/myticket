import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './model/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeModel: typeof VenueType){}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeModel.create(createVenueTypeDto)
  }

  findAll() {
    return this.venueTypeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.venueTypeModel.findByPk(id)
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeModel.update(updateVenueTypeDto,{where:{id},returning:true})
  }

  remove(id: number) {
    return this.venueTypeModel.destroy({where:{id}})
  }
}
