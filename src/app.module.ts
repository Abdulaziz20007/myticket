import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { LangModule } from "./lang/lang.module";
import { Lang } from "./lang/models/lang.model";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from './seat_type/seat_type.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { CartStatusModule } from './cart_status/cart_status.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Lang, HumanCategory],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    LangModule,
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    TicketStatusModule,
    CartStatusModule,
    PaymentMethodModule,
    DeliveryMethodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
