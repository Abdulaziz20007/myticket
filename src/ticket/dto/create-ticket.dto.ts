import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({
    description: "Tadbir ID raqami",
    example: 1,
  })
  eventId: number;

  @ApiProperty({
    description: "O'rindiq ID raqami",
    example: 1,
  })
  seatId: number;

  @ApiProperty({
    description: "Chipta narxi",
    example: 150000,
  })
  price: number;

  @ApiProperty({
    description: "Xizmat to'lovi",
    example: 15000,
  })
  service_fee: number;

  @ApiProperty({
    description: "Chipta holati ID raqami",
    example: 1,
  })
  statusId: number;

  @ApiProperty({
    description: "Chipta turi",
    example: "VIP",
  })
  ticket_type: string;
}
