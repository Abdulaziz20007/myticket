export class CreateBookingDto {
  cart_id: string;
  createdAt: Date;
  finishedAt: Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: string;
  status_id: number;
}
