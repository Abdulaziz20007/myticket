import { ApiProperty } from "@nestjs/swagger";

export class CreateCartItemDto {
  @ApiProperty({
    description: "Chipta ID raqami",
    example: 1,
  })
  ticketId: number;

  @ApiProperty({
    description: "Savatcha ID raqami",
    example: 1,
  })
  cartId: number;

  @ApiProperty({
    description: "Chiptalar soni",
    example: 2,
  })
  quantity: number;
}
