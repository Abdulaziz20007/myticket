import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { Role } from "./model/role.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({
      ...createRoleDto,
      value: createRoleDto.value.toLocaleUpperCase(),
    });
  }

  findAll() {
    return this.roleModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  findRoleByValue(value: string) {
    return this.roleModel.findOne({
      where: { value: value.toUpperCase() },
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.update(updateRoleDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.roleModel.destroy({ where: { id } });
  }
}
