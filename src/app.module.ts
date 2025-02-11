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
import { SeatType } from "./seat_type/model/seat_type.model";
import { VenueType } from "./venue_type/model/venue_type.model";
import { TicketStatus } from "./ticket_status/model/ticket_status.model";
import { CartStatus } from "./cart_status/model/cart_status.model";
import { PaymentMethod } from "./payment_method/model/payment_method.model";
import { DeliveryMethod } from "./delivery_method/model/delivery_method.model";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/model/region.model";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/model/district.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/model/venue.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenueVenueTypeModule } from "./venue_venue_type/venue_venue_type.module";
import { VenueVenueType } from "./venue_venue_type/model/venue_venue_type.model";
import { VenuePhoto } from "./venue_photo/model/venue_photo.model";
import { TicketModule } from "./ticket/ticket.module";
import { Ticket } from "./ticket/model/ticket.model";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/model/seat.model";
import { EventModule } from "./event/event.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventType } from "./event_type/model/event_type.model";
import { Event } from "./event/model/event.model";
import { CustomerModule } from "./customer/customer.module";
import { CartModule } from "./cart/cart.module";
import { CartItemModule } from "./cart_item/cart_item.module";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { Customer } from "./customer/model/customer.model";
import { CustomerCard } from "./customer_card/model/customer_card.model";
import { Cart } from "./cart/model/cart.model";
import { CartItem } from "./cart_item/model/cart_item.model";
import { BookingModule } from "./booking/booking.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { AdminModule } from "./admin/admin.module";
import { DiscountCouponModule } from "./discount_coupon/discount_coupon.module";
import { BookingStatusModule } from "./booking_status/booking_status.module";
import { BookingStatus } from "./booking_status/model/booking_status.model";
import { Booking } from "./booking/model/booking.model";
import { DiscountCoupon } from "./discount_coupon/model/discount_coupon.model";
import { Admin } from "./admin/model/admin.model";
import { CustomerAddress } from "./customer_address/model/customer_address.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/model/role.model";
import { UsersModule } from "./users/users.module";
import { User } from "./users/model/user.model";
import { UserRole } from "./users/model/user-role-model";
import { AuthModule } from "./auth/auth.module";
import { SingleFileService } from "./single-file.service";
import { MultiFileService } from "./multi-file.service";
import { MultiFileController } from "./multi-file.controller";
import { SingleFileController } from "./single-file.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: `postgres`,
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Event,
        Lang,
        HumanCategory,
        SeatType,
        VenueType,
        TicketStatus,
        CartStatus,
        PaymentMethod,
        DeliveryMethod,
        Region,
        District,
        Venue,
        VenuePhoto,
        VenueVenueType,
        Ticket,
        EventType,
        Seat,
        EventType,
        SeatType,
        Customer,
        CustomerCard,
        Cart,
        CartItem,
        BookingStatus,
        DiscountCoupon,
        Booking,
        Admin,
        CustomerAddress,
        Role,
        User,
        UserRole,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
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
    VenueVenueTypeModule,
    TicketModule,
    SeatModule,
    EventModule,
    EventTypeModule,
    CustomerModule,
    CartModule,
    CartItemModule,
    CustomerCardModule,
    BookingModule,
    CustomerAddressModule,
    AdminModule,
    DiscountCouponModule,
    BookingStatusModule,
    RolesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [SingleFileController, MultiFileController],
  providers: [SingleFileService, MultiFileService],
})
export class AppModule {}
