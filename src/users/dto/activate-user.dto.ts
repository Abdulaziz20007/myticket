import { ApiProperty } from "@nestjs/swagger";

export class ActivateUserDto {
  @ApiProperty({
    description: "Foydalanuvchi ID raqami",
    example: 1,
  })
  userId: number;
}
