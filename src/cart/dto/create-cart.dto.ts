import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @ApiProperty({
    description: "Xaridor ID raqami",
    example: 1,
  })
  customerId: number;

  @ApiProperty({
    description: "Savatcha yakunlanish vaqti",
    example: "2024-03-21 15:00:00",
  })
  finishedAt: string;

  @ApiProperty({
    description: "Savatcha holati ID raqami",
    example: 1,
  })
  statusId: number;
}
