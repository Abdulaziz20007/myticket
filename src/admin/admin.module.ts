import { forwardRef, Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Admin } from "./model/admin.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [SequelizeModule.forFeature([Admin]), forwardRef(() => AuthModule)],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminModule, AdminService],
})
export class AdminModule {}
