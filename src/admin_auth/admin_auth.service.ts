import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "../auth/dto/sign-in.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { Admin } from "../admin/model/admin.model";
import { AdminService } from "../admin/admin.service";

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  private async generateToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    const candidate = await this.adminService.findOne({
      where: { email: createUserDto.email },
    });

    if (candidate) {
      throw new BadRequestException("Admin already exists");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 15);
    const newAdmin = await this.adminService.create({
      name: createUserDto.name,
      email: createUserDto.email,
      hashed_password: hashedPassword,
      is_active: true,
      is_creator: false,
      hashed_refresh_token: null,
    });

    return this.generateToken(newAdmin);
  }

  async signIn(signInDto: SignInDto) {
    const admin = await this.adminService.findOne({
      where: { email: signInDto.email },
    });
    if (!admin) {
      throw new UnauthorizedException("Email or password is incorrect");
    }

    if (!admin.is_active) {
      throw new ForbiddenException("Admin is not active");
    }

    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      admin.hashed_password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email or password is incorrect");
    }

    return this.generateToken(admin);
  }
}
