import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({
    description: "Administrator ismi",
    example: "Admin Adminov",
  })
  name: string;

  @ApiProperty({
    description: "Administrator elektron pochtasi",
    example: "admin@example.com",
  })
  email: string;

  @ApiProperty({
    description: "Shifrlangan parol",
    example: "$2b$10$abcdefghijklmnopqrstuvwxyz",
  })
  hashed_password: string;

  @ApiProperty({
    description: "Yaratuvchi admin huquqi",
    example: true,
  })
  is_creator: boolean;
}
