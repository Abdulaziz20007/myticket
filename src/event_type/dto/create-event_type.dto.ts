import { ApiProperty } from "@nestjs/swagger";

export class CreateEventTypeDto {
  @ApiProperty({
    description: "Tadbir turi nomi",
    example: "Konsert",
  })
  name: string;

  @ApiProperty({
    description: "Asosiy tadbir turi ID raqami",
    example: 1,
  })
  parentEventTypeId: number;
}
