import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty({
    description: "Mijoz ismi",
    example: "Alisher",
  })
  first_name: string;

  @ApiProperty({
    description: "Mijoz familiyasi",
    example: "Aliyev",
  })
  last_name: string;

  @ApiProperty({
    description: "Telefon raqami",
    example: "+998901234567",
  })
  phone: string;

  @ApiProperty({
    description: "Shifrlangan parol",
    example: "$2b$10$abcdefghijklmnopqrstuvwxyz",
  })
  hashed_password: string;

  @ApiProperty({
    description: "Elektron pochta",
    example: "alisher@example.com",
  })
  email: string;

  @ApiProperty({
    description: "Tug'ilgan sana",
    example: "1990-01-01",
  })
  birth_date: string;

  @ApiProperty({
    description: "Jinsi",
    example: "erkak",
  })
  gender: string;

  @ApiProperty({
    description: "Til ID raqami",
    example: 1,
  })
  langId: number;
}
