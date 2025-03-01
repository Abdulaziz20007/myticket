import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Event } from "./model/event.model";
import { Lang } from "../lang/models/lang.model";

@Module({
  imports: [SequelizeModule.forFeature([Event, Lang])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
