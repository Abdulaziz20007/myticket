import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { UserRole } from "./model/user-role-model";
import { Role } from "../roles/model/role.model";
import { AuthModule } from "../auth/auth.module";
import { RolesModule } from "../roles/roles.module";

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRole, Role]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
