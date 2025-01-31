import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "../auth/dto/sign-in.dto";

@Injectable()
export class AdminAuthService {
  async signUp(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  async signIn(signInDto: SignInDto) {
    return signInDto;
  }
}
