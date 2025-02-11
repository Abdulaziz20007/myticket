import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
  @ApiProperty({
    description: "Chipta holati nomi",
    example: "Sotilgan",
  })
  name: string;
}
