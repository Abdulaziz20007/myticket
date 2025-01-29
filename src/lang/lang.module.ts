import { Module } from "@nestjs/common";
import { LangController } from "./lang.controller";
import { LangService } from "./lang.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Lang } from "./model/lang.model";

@Module({
  imports: [SequelizeModule.forFeature([Lang])],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
