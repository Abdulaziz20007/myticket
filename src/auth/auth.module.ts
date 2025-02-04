import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { CustomerModule } from "../customer/customer.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    forwardRef(() => CustomerModule),
    forwardRef(() => AdminModule),
    forwardRef(() => UsersModule),
    JwtModule.register({
      global: true,
      secret: "MySecretKey",
      signOptions: { expiresIn: "15h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
