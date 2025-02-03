import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerCardDto {
  @ApiProperty({
    description: "Mijoz ID raqami",
    example: 1,
  })
  customerId: number;

  @ApiProperty({
    description: "Karta nomi",
    example: "My HUMO card",
  })
  name: string;

  @ApiProperty({
    description: "Telefon raqami",
    example: "+998901234567",
  })
  phone: string;

  @ApiProperty({
    description: "Karta raqami",
    example: "8600 1234 5678 9012",
  })
  number: string;

  @ApiProperty({
    description: "Karta amal qilish yili",
    example: 2025,
  })
  year: number;

  @ApiProperty({
    description: "Karta amal qilish oyi",
    example: 12,
  })
  month: number;

  @ApiProperty({
    description: "Karta holati",
    example: true,
  })
  is_active: boolean;

  @ApiProperty({
    description: "Asosiy karta",
    example: true,
  })
  is_main: boolean;
}
