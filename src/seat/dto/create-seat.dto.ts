import { ApiProperty } from '@nestjs/swagger';

export class CreateSeatDto {
  @ApiProperty({
    description: "Sektor raqami",
    example: 1,
  })
  sector: number;


  @ApiProperty({
    description: "Qator raqami",
    example: 5,
  })
  row_number: number;


  @ApiProperty({
    description: "O'rindiq raqami",
    example: 15,
  })
  number: number;


  @ApiProperty({
    description: "Joy ID raqami",
    example: 1,
  })
  venueId: number;


  @ApiProperty({
    description: "O'rindiq turi ID raqami",
    example: 1,
  })
  seatTypeId: number;


  @ApiProperty({
    description: "Sxemadagi joylashuvi",
    example: '{"x": 100, "y": 150}',
  })
  location_in_schema: string;

}
