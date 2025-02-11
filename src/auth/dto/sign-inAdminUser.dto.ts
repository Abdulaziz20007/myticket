import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class SignInAdminUserDto {
  @ApiProperty({
    description: "Administrator elektron pochtasi",
    example: "admin@example.com",
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: "Administrator paroli (kamida 6 ta belgi)",
    example: "Admin123!",
  })
  readonly password: string;
}
