import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UsePipes,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInAdminUserDto } from "./dto/sign-inAdminUser.dto";
import { CreateCustomerDto } from "../customer/dto/create-customer.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post("signup-admin")
  async signUpAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signUpAdmin(createAdminDto);
  }

  @Post("signup-customer")
  async signUpCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.signUpCustomer(createCustomerDto);
  }

  @HttpCode(HttpStatus.OK)
  // @UsePipes(new CustomerValidationPipe())
  @Post("signin")
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin-admin")
  async signInAdmin(@Body() signInDto: SignInAdminUserDto) {
    return this.authService.signInAdmin(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin-customer")
  async signInCustomer(@Body() signInDto: SignInAdminUserDto) {
    return this.authService.signInCustomer(signInDto);
  }
}
