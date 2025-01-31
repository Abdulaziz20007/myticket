import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  Get,
  Param,
  UseGuards,
} from "@nestjs/common";
import { AdminAuthService } from "./admin_auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInAdminDto } from "./dto/signin-admin.dto";
import { CustomValidationPipe } from "../pipe/validation.pipe";
import { AdminJwtGuard } from "../guards/admin-jwt.guard";
import { AdminSelfGuard } from "../guards/admin-self.guard";

@Controller("admin-auth")
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post("signup")
  async signUp(@Body() createAdminDto: CreateAdminDto) {
    return this.adminAuthService.signUp(createAdminDto);
  }

  @HttpCode(HttpStatus.OK)
  @UsePipes(new CustomValidationPipe())
  @Post("signin")
  async signIn(@Body() signInDto: SignInAdminDto) {
    return this.adminAuthService.signIn(signInDto);
  }

  @UseGuards(AdminJwtGuard)
  @UseGuards(AdminSelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminAuthService.findOne(+id);
  }
}
