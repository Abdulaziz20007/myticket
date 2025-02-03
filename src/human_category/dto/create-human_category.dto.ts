import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto {
  @ApiProperty({
    description: "Toifa nomi",
    example: "O'smirlar",
  })
  name: string;

  @ApiProperty({
    description: "Boshlanish yoshi",
    example: 12,
  })
  start_age: number;

  @ApiProperty({
    description: "Tugash yoshi",
    example: 17,
  })
  finish_age: number;

  @ApiProperty({
    description: "Jinsi",
    example: "erkak",
  })
  gender: string;
}
