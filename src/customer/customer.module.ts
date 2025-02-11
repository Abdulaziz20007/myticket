import { forwardRef, Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Customer } from "./model/customer.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Customer]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerModule, CustomerService],
})
export class CustomerModule {}
