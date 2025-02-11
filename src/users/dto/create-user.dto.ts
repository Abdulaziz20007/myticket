import { ApiProperty } from "@nestjs/swagger";
import { IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "Foydalanuvchi ismi",
    example: "Alisher",
  })
  name: string;

  @ApiProperty({
    description: "Elektron pochta",
    example: "alisher@example.com",
  })
  email: string;

  @ApiProperty({
    description: "Parol",
    example: "Qwerty123!",
  })
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    description: "Foydalanuvchi roli",
    example: "USER",
  })
  value: string;
}
