import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
  @ApiProperty({
    description: "O'rindiq turi nomi",
    example: "VIP",
  })
  name: string;
}
