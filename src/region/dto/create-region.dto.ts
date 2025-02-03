import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
  @ApiProperty({
    description: "Viloyat nomi",
    example: "Toshkent",
  })
  name: string;

  @ApiProperty({
    description: "Viloyat ID raqami",
    example: 1,
  })
  regionId: number;
}
