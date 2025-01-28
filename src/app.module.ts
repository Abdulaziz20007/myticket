import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { LangModule } from "./lang/lang.module";
import { Lang } from "./lang/models/lang.model";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { CartStatusModule } from "./cart_status/cart_status.module";
import { PaymentMethodModule } from "./payment_method/payment_method.module";
import { DeliveryMethodModule } from "./delivery_method/delivery_method.module";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { CartStatus } from "./cart_status/models/cart_status.model";
import { DeliveryMethod } from "./delivery_method/models/delivery_method.model";
import { District } from "./district/models/district.model";
import { PaymentMethod } from "./payment_method/models/payment_method.model";
import { Region } from "./region/models/region.model";
import { SeatType } from "./seat_type/models/seat_type.model";
import { TicketStatus } from "./ticket_status/models/ticket_status.model";
import { VenueType } from "./venue_type/models/venue_type.mdel";
import { VenueModule } from "./venue/venue.module";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { Venue } from "./venue/models/venue.model";
import { VenuePhoto } from "./venue_photo/models/venue_photo.model";
import { VenueVenuetypeModule } from "./venue_venuetype/venue_venuetype.module";
import { VenueVenuetype } from "./venue_venuetype/models/venue_venuetype.model";
import { BookingModule } from "./booking/booking.module";
import { CartModule } from "./cart/cart.module";
import { CartItemModule } from "./cart-item/cart-item.module";
import { TicketModule } from "./ticket/ticket.module";
import { EventModule } from "./event/event.module";
import { EventTypeModule } from "./event-type/event-type.module";
import { SeatModule } from "./seat/seat.module";
import { CustomerModule } from "./customer/customer.module";
import { CustomerCardModule } from "./customer-card/customer-card.module";
import { CustomerAddressModule } from "./customer-address/customer-address.module";
import { AdminModule } from "./admin/admin.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { CartItemModule } from "./cart_item/cart_item.module";
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';

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
      models: [
        Lang,
        HumanCategory,
        CartStatus,
        DeliveryMethod,
        District,
        PaymentMethod,
        Region,
        SeatType,
        TicketStatus,
        VenueType,
        Venue,
        VenuePhoto,
        VenueVenuetype,
      ],
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
    RegionModule,
    DistrictModule,
    VenueModule,
    VenuePhotoModule,
    VenueVenuetypeModule,
    BookingModule,
    CartModule,
    CartItemModule,
    TicketModule,
    EventModule,
    EventTypeModule,
    SeatModule,
    CustomerModule,
    CustomerCardModule,
    CustomerAddressModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
