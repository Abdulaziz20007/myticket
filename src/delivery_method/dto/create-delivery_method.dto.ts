import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryMethodDto {
  @ApiProperty({
    description: "Yetkazib berish usuli nomi",
    example: "Kuryer orqali",
  })
  name: string;
}
