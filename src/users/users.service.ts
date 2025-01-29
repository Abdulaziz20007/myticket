import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { RolesService } from "src/roles/roles.service";
import { Role } from "src/roles/model/role.model";
import { NotFoundError } from "rxjs";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(Role)
    private roleModel: typeof Role,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findRoleByValue(createUserDto.value);
    const role2 = await this.roleModel.findOne({
      where: { value: createUserDto.value.toLocaleUpperCase() },
    });
    if (!role) {
      throw new NotFoundException("Role Not found");
    }
    await newUser.$set("roles", [role.id]);
    await newUser.save();
    newUser.roles = [role];
    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByEmail(email: string) {
    return this.userModel.findOne({
      where: { email },
      include: { all: true },
    });
  }
}
