import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/model/user.model";
import * as bcrypt from "bcrypt";
import { SignInDto } from "./dto/sign-in.dto";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/model/admin.model";
import { Customer } from "../customer/model/customer.model";
import { CreateCustomerDto } from "../customer/dto/create-customer.dto";
import { CustomerService } from "../customer/customer.service";
import { SignInAdminUserDto } from "./dto/sign-inAdminUser.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
    private readonly customerService: CustomerService
  ) {}

  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email, roles: user.roles };
    return { token: this.jwtService.sign(payload) };
  }

  private async generateTokenAdmin(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      is_creator: admin.is_creator,
    };
    return { token: this.jwtService.sign(payload) };
  }

  private async generateTokenCustomer(customer: Customer) {
    const payload = { id: customer.id, email: customer.email };
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    const candidate = await this.userService.findUserByEmail(
      createUserDto.email
    );

    if (candidate) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }

    const hashedPasword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPasword;
    const newUser = await this.userService.create(createUserDto);

    return this.generateToken(newUser);
  }

  async signUpAdmin(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findAdminByEmail(
      createAdminDto.email
    );

    if (candidate) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }

    const hashedPasword = await bcrypt.hash(createAdminDto.hashed_password, 7);
    createAdminDto.hashed_password = hashedPasword;
    const newAdmin = await this.adminService.create(createAdminDto);

    return this.generateTokenAdmin(newAdmin);
  }

  async signUpCustomer(createCustomerDto: CreateCustomerDto) {
    const candidate = await this.customerService.findCustomerByEmail(
      createCustomerDto.email
    );

    if (candidate) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }

    const hashedPasword = await bcrypt.hash(
      createCustomerDto.hashed_password,
      7
    );
    createCustomerDto.hashed_password = hashedPasword;
    const newCustomer = await this.customerService.create(createCustomerDto);

    return this.generateTokenCustomer(newCustomer);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findUserByEmail(signInDto.email);

    if (!user) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    console.log(user);

    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const hasRole = user.roles.some(
      (role) => role.value == signInDto.value.toUpperCase()
    );

    if (!hasRole) {
      throw new ForbiddenException("Sizda bunday role yo'q");
    }

    return this.generateToken(user);
  }

  async signInAdmin(signInDto: SignInAdminUserDto) {
    const admin = await this.adminService.findAdminByEmail(signInDto.email);

    if (!admin) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      admin.hashed_password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    console.log(admin);

    return this.generateTokenAdmin(admin);
  }

  async signInCustomer(signInDto: SignInAdminUserDto) {
    const customer = await this.customerService.findCustomerByEmail(
      signInDto.email
    );

    if (!customer) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      customer.hashed_password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    return this.generateTokenCustomer(customer);
  }
}
