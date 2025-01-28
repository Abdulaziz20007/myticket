import { Module } from "@nestjs/common";
import { VenueVenuetypeService } from "./venue_venuetype.service";
import { VenueVenuetypeController } from "./venue_venuetype.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { VenueVenuetype } from "./models/venue_venuetype.model";

@Module({
  imports: [SequelizeModule.forFeature([VenueVenuetype])],
  controllers: [VenueVenuetypeController],
  providers: [VenueVenuetypeService],
})
export class VenueVenuetypeModule {}
