import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {
  @ApiProperty({
    description: "Joy nomi",
    example: "Humo Arena",
  })
  name: string;

  @ApiProperty({
    description: "Joy manzili",
    example: "Beshyogoch ko'chasi",
  })
  address: string;

  @ApiProperty({
    description: "Joylashuv koordinatalari",
    example: "41.299496, 69.240073",
  })
  location: string;

  @ApiProperty({
    description: "Veb-sayt manzili",
    example: "https://humoarena.uz",
  })
  site: string;

  @ApiProperty({
    description: "Telefon raqami",
    example: "+998901234567",
  })
  phone: string;

  @ApiProperty({
    description: "Joy sxemasi",
    example: ["schema1.jpg", "schema2.jpg"],
  })
  schema: string[];

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
}
