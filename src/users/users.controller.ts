import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddRoleDto } from "./dto/add-role.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { JwtSelfGuard } from "../guards/jwt-self.guard";
import { Roles } from "../decorators/roles-auth.decorator";
import { RolesGuard } from "../guards/roles.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @HttpCode(200)
  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @Post("add-role")
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }

  @HttpCode(200)
  @Post("activate")
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }

  @HttpCode(200)
  @Post("de-activate")
  deActivateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.deActivateUser(activateUserDto);
  }

  @Post("remove-role")
  removeRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.removeRole(addRoleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  // @Get("email/:email")
  // findUserByEmail(@Param("email") email: string) {
  //   return this.usersService.findUserByEmail();
  // }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
