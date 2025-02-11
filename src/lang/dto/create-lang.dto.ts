import { ApiProperty } from "@nestjs/swagger";

export class CreateLangDto {
  @ApiProperty({
    description: "Til nomi",
    example: "O'zbek",
  })
  name: string;
}
