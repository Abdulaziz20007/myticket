import { Injectable } from "@nestjs/common";
import { CreateVenueVenuetypeDto } from "./dto/create-venue_venuetype.dto";
import { UpdateVenueVenuetypeDto } from "./dto/update-venue_venuetype.dto";
import { VenueVenuetype } from "./models/venue_venuetype.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class VenueVenuetypeService {
  constructor(
    @InjectModel(VenueVenuetype) private venueVenueType: typeof VenueVenuetype
  ) {}
  create(createVenueVenuetypeDto: CreateVenueVenuetypeDto) {
    return this.venueVenueType.create(createVenueVenuetypeDto);
  }

  findAll() {
    return `This action returns all venueVenuetype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venueVenuetype`;
  }

  update(id: number, updateVenueVenuetypeDto: UpdateVenueVenuetypeDto) {
    return `This action updates a #${id} venueVenuetype`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueVenuetype`;
  }
}
