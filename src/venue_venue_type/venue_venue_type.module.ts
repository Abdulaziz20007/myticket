import { Module } from "@nestjs/common";
import { VenueVenueTypeService } from "./venue_venue_type.service";
import { VenueVenueTypeController } from "./venue_venue_type.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { VenueVenueType } from "./model/venue_venue_type.model";
import { Venue } from "src/venue/model/venue.model";
import { VenueType } from "src/venue_type/model/venue_type.model";

@Module({
  imports: [SequelizeModule.forFeature([VenueVenueType, Venue, VenueType])],
  controllers: [VenueVenueTypeController],
  providers: [VenueVenueTypeService],
})
export class VenueVenueTypeModule {}
