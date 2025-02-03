import { ApiProperty } from "@nestjs/swagger";

export class CreateVenuePhotoDto {
  @ApiProperty({
    description: "Joy surati havolasi",
    example: "https://example.com/venue1.jpg",
  })
  url: string;

  @ApiProperty({
    description: "Joy ID raqami",
    example: 1,
  })
  venueId: number;
}
