import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
  @ApiProperty({
    description: "Joy turi nomi",
    example: "Stadion",
  })
  name: string;
}
