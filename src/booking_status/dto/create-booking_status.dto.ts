import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingStatusDto {
  @ApiProperty({
    description: "Buyurtma holati nomi",
    example: "Tasdiqlangan",
  })
  name: string;
}
