import { IsEmail, IsStrongPassword } from "class-validator";

export class SignInAdminUserDto {
  @IsEmail()
  readonly email: string;
  @IsStrongPassword(
    { minLength: 6 },
    { message: "parol yetarlicha mustahkam emas" }
  )
  readonly password: string;
}
