import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class SignInDto {
  @ApiProperty({
    description: "Foydalanuvchi elektron pochtasi",
    example: "user@example.com",
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: "Foydalanuvchi paroli (kamida 6 ta belgi)",
    example: "Qwerty123!",
  })

  readonly password: string;

  @ApiProperty({
    description: "Foydalanuvchi roli",
    example: "ADMIN",
  })
  @IsString()
  @IsNotEmpty()
  readonly value: string;
}
