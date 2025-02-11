import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
  @ApiProperty({
    description: "Buyurtma yakunlanish vaqti",
    example: "2024-03-21 15:00:00",
  })
  finishedAt: string;

  @ApiProperty({
    description: "To'lov usuli ID raqami",
    example: 1,
  })
  paymentMethodId: number;

  @ApiProperty({
    description: "Yetkazib berish usuli ID raqami",
    example: 1,
  })
  deliveryMethodId: number;

  @ApiProperty({
    description: "Chegirma kuponi ID raqami",
    example: 1,
  })
  discountCoupunId: number;

  @ApiProperty({
    description: "Buyurtma holati ID raqami",
    example: 1,
  })
  statusId: number;

  @ApiProperty({
    description: "Savatcha ID raqami",
    example: 1,
  })
  cartId: number;
}
