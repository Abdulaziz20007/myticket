import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./models/venue_type.mdel";

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueType: typeof VenueType) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueType.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueType.findAll();
  }

  findOne(id: number) {
    return this.venueType.findByPk(id);
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venue = await this.venueType.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0]
  }

  remove(id: number) {
    return this.venueType.destroy({ where: { id } });
  }
}
