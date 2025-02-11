import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerAddressDto {
  @ApiProperty({
    description: "Mijoz ID raqami",
    example: 1,
  })
  customerId: number;

  @ApiProperty({
    description: "Manzil nomi",
    example: "Uy manzili",
  })
  name: string;

  @ApiProperty({
    description: "Viloyat ID raqami",
    example: 1,
  })
  regionId: number;

  @ApiProperty({
    description: "Tuman ID raqami",
    example: 1,
  })
  districtId: number;

  @ApiProperty({
    description: "Ko'cha nomi",
    example: "Amir Temur shoh ko'chasi",
  })
  street: string;

  @ApiProperty({
    description: "Uy raqami",
    example: "15-A",
  })
  house: string;

  @ApiProperty({
    description: "Xonadon raqami",
    example: 42,
  })
  flat: number;

  @ApiProperty({
    description: "Joylashuv",
    example: "41.299496, 69.240073",
  })
  location: string;

  @ApiProperty({
    description: "Pochta indeksi",
    example: 100011,
  })
  post_index: number;

  @ApiProperty({
    description: "Qo'shimcha ma'lumot",
    example: "Kirish yo'li orqa tarafdan",
  })
  info: string;
}
