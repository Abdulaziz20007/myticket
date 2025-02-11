import { ApiProperty } from "@nestjs/swagger";

export class CreateCartStatusDto {
  @ApiProperty({
    description: "Savatcha holati nomi",
    example: "Faol",
  })
  name: string;
}
