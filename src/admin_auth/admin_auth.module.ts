import { Module } from "@nestjs/common";
import { AdminAuthService } from "./admin_auth.service";
import { AdminAuthController } from "./admin_auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";

@Module({
  imports: [
    AdminModule,
    JwtModule.register({
      global: true,
      secret: "AdminSecretKey",
      signOptions: { expiresIn: "15h" },
    }),
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService],
})
export class AdminAuthModule {}
