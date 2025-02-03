import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentMethodDto {
  @ApiProperty({
    description: "To'lov usuli nomi",
    example: "Naqd pul",
  })
  name: string;
}
