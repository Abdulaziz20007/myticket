import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
  @ApiProperty({
    description: "Tuman nomi",
    example: "Chilonzor",
  })
  name: string;
}
