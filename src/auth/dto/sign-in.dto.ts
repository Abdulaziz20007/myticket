import { IsEmail, IsStrongPassword } from "class-validator";

export class SignInDto {
  // @IsEmail()
  readonly email: string;
  // @IsStrongPassword(
  //   { minLength: 6 },
  //   { message: "Parol yetarlicha mustahkam emas" }
  // )
  readonly password: string;
  readonly value: string;
}
