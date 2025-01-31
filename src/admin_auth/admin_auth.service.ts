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
import { CreateAdminDto } from "src/admin/dto/create-admin.dto";
import { SignInAdminDto } from "./dto/signin-admin.dto";

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

  async signUp(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findOne({
      where: { email: createAdminDto.email },
    });

    if (candidate) {
      throw new BadRequestException("Admin already exists");
    }

    const hashedPassword = await bcrypt.hash(
      createAdminDto.hashed_password,
      15
    );
    const newAdmin = await this.adminService.create({
      name: createAdminDto.name,
      email: createAdminDto.email,
      hashed_password: hashedPassword,
      is_active: true,
      is_creator: false,
      hashed_refresh_token: "",
    });

    return this.generateToken(newAdmin);
  }

  async signIn(signInDto: SignInAdminDto) {
    const admin = await this.adminService.findOne({
      where: { email: signInDto.email },
    });
    if (!admin) {
      throw new UnauthorizedException("Email yoki parol noto'g'ri");
    }

    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      admin.hashed_password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email yoki parol noto'g'ri");
    }

    return this.generateToken(admin);
  }

  async findOne(id: number) {
    return this.adminService.findOne({ where: { id } });
  }
}
