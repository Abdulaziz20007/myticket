import { ApiProperty } from "@nestjs/swagger";

export class CreateDiscountCouponDto {
  @ApiProperty({
    description: "Chipta ID raqami",
    example: 1,
  })
  ticketId: number;

  @ApiProperty({
    description: "Chegirma kodi",
    example: "WELCOME2024",
  })
  discount_code: string;

  @ApiProperty({
    description: "Chegirma foizi",
    example: 15,
  })
  discount_percentage: number;

  @ApiProperty({
    description: "Amal qilish muddati boshlanishi",
    example: "2024-03-01",
  })
  valid_from: string;

  @ApiProperty({
    description: "Amal qilish muddati tugashi",
    example: "2024-03-31",
  })
  valid_to: string;

  @ApiProperty({
    description: "Kupon holati",
    example: "active",
  })
  status: string;
}
