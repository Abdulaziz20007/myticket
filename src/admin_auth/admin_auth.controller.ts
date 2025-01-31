import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from "@nestjs/common";
import { AdminAuthService } from "./admin_auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "../auth/dto/sign-in.dto";
import { CustomValidationPipe } from "../pipe/validation.pipe";

@Controller("admin-auth")
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.adminAuthService.signUp(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @UsePipes(new CustomValidationPipe())
  @Post("signin") 
  async signIn(@Body() SignInDto: SignInDto) {
    return this.adminAuthService.signIn(SignInDto);
  }
}
