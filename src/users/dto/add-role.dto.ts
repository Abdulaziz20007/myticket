import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({
    description: "Foydalanuvchi ID raqami",
    example: 1,
  })
  readonly userId: number;

  @ApiProperty({
    description: "Foydalanuvchi roli",
    example: "ADMIN",
  })
  readonly value: string;
}
