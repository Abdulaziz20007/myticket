import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueVenueTypeDto {
  @ApiProperty({
    description: "Joy ID raqami",
    example: 1,
  })
  venueId: number;

  @ApiProperty({
    description: "Joy turi ID raqami",
    example: 1,
  })
  venueTypeId: number;
}
